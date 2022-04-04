// src\product\schemas\productResponse.schema.ts
import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseSchema {
    @ApiProperty({
        type: Number,
        example: 1,
        minLength: 1,
    })
    id: number;

    @ApiProperty({
        type: String,
        example: 'iPhone X',
        minLength: 2,
        maxLength: 50,
    })
    title: string;
    @ApiProperty({
        type: String,
        example: 'iPhone X desc',
        minLength: 2,
        maxLength: 255,
    })
    description: string;
    @ApiProperty({
        type: Number,
        example: 800,
        minimum: 1,
        maximum: 1_000_000,
    })
    price: number;
    @ApiProperty({
        type: Number,
        example: 1,
        minimum: 1,
    })
    categoryId: number;
}
