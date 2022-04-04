// src\product\product.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async create(productDto: ProductDto) {
    return await this.prisma.product.create({
      data: productDto,
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, productDto: ProductDto) {
    return await this.prisma.product.update({
      where: {
        id,
      },
      data: productDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
