// src\category\category.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async create(categoryDto: CategoryDto) {
    return await this.prisma.category.create({
      data: categoryDto,
    });
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, categoryDto: CategoryDto) {
    return await this.prisma.category.update({
      where: {
        id,
      },
      data: categoryDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
