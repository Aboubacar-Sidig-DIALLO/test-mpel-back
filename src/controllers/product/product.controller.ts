import { BadRequestException, Body, Controller, Post, Logger, Get, Query, DefaultValuePipe, ParseIntPipe, Param, Patch, NotFoundException, Delete } from '@nestjs/common';
import { CreateProductDto, productSchema, UpdateProductDto } from 'src/dtos/product/product';
import { PageNumberPipe } from 'src/midllewares/page-number-pipe.pipe';
import { ProductService } from 'src/services/product/product.service';
import { Product } from 'src/types/product.interface';
import { ZodError } from 'zod';

@Controller('product')
export class ProductController {
    private readonly logger = new Logger(ProductController.name);

    constructor(private readonly productService: ProductService) { }

    @Get()
    async getAllProducts(@Query('page', new DefaultValuePipe(1), PageNumberPipe) page: number,
                         @Query('take', new DefaultValuePipe(10), ParseIntPipe) take: number,): Promise<{ totalPages: number; products: Product[] }> {
        this.logger.log(`Fetching products for page ${page} with ${take} items per page`);
        return await this.productService.getProducts(page, take);
    }

    @Post()
    async createProduct(@Body() productDto: CreateProductDto): Promise<Product> {
        this.logger.log('Attempting to create a new product');
        const validatedData = productSchema.safeParse(productDto);
        if (!validatedData.success) {
            this.logger.warn('Invalid product data received');
            throw new BadRequestException("Impossible de créer un object invalide");
        }
        this.logger.log('Product data validated successfully');
        return await this.productService.createProduct(productDto);
    }

    @Patch(':id')
    async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateProductDto): Promise<Product> {
        this.logger.log(`Attempting to update product with ID ${id}`);
        try {
            productSchema.parse(updateDto); // validation de données
            this.logger.log('Product data validated successfully');
            return await this.productService.updateProduct(id, updateDto);
        } catch (exception) {
            if (exception instanceof ZodError) {
                this.logger.warn('Invalid product data received for update');
                throw new BadRequestException("Invalide object");
            }
            this.logger.error(`Product with ID ${id} not found for update`);
            throw new NotFoundException("Element introuvable");
        }
    }

    @Delete(':id')
    async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
        this.logger.log(`Attempting to delete product with ID ${id}`);
        try {
            return await this.productService.deleteProduct(id);
        } catch (exception) {
            this.logger.error(`Product with ID ${id} not found for deletion`);
            throw new NotFoundException('Impossible de supprimer un element qui n\'existe pas');
        }
    }
}