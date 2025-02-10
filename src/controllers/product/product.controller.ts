import { BadRequestException, Body, Controller, Post, Logger } from '@nestjs/common';
import { CreateProductDto, productSchema } from 'src/dtos/product/product';
import { ProductService } from 'src/services/product/product/product.service';
import { Product } from 'src/types/product.interface';

@Controller('product')
export class ProductController {
    private readonly logger = new Logger(ProductController.name);

    constructor(private readonly productService: ProductService) { }

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
}