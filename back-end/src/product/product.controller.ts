// src\product\product.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ProductSchema } from './schemas/product.schema';
import { ProductResponseSchema } from './schemas/productResponse.schema';

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiBody({ type: ProductSchema })
  @ApiCreatedResponse({type: ProductResponseSchema,})
  create(@Body() productDto: ProductDto) {
    return this.productService.create(productDto);
  }

  @Get()
  @ApiOkResponse({type: [ProductResponseSchema]})
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ProductResponseSchema})
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  @ApiBody({ type: ProductSchema })
  @ApiOkResponse({type: ProductResponseSchema})
  update(@Param('id') id: string, @Body() productDto: ProductDto) {
    return this.productService.update(+id, productDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: ProductResponseSchema})
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
