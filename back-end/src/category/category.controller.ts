import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CategorySchema } from './schemas/category.schema';
import { CategoryResponseSchema } from './schemas/categoryResponse.schema';

@Controller('api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiBody({ type: CategorySchema })
  @ApiCreatedResponse({type: CategoryResponseSchema,})
  create(@Body() categoryDto: CategoryDto) {
    return this.categoryService.create(categoryDto);
  }

  @Get()
  @ApiOkResponse({type: [CategoryResponseSchema]})
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: [CategoryResponseSchema]})
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Put(':id')
  @ApiBody({ type: CategorySchema })
  @ApiOkResponse({type: [CategoryResponseSchema]})
  update(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.categoryService.update(+id, categoryDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: [CategoryResponseSchema]})
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
