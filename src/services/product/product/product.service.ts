import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product/product';
import { Product } from 'src/types/product.interface';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaClient) { }

    async getProducts(page: number, take: number): Promise<{ totalPages: number; products: Product[] }> {
        // const take = 10;
        const skip = (page - 1) * take;

        const totalProducts = await this.prisma.product.count();
        const totalPages = Math.ceil(totalProducts / take);

        const products = await this.prisma.product.findMany({ take, skip });

        return { totalPages, products };
    }


    async createProduct(data: CreateProductDto): Promise<Product> {
        return this.prisma.product.create({ data });
    }

    async updateProduct(id: number, data: UpdateProductDto): Promise<Product> {
        return this.prisma.product.update({ where: { id }, data });
    }

    async deleteProduct(id: number): Promise<Product> {
        return this.prisma.product.delete({ where: { id } });
    }
}
