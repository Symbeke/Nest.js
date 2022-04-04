// src\category\schemas\category.schema.ts
import { ApiProperty } from '@nestjs/swagger';

export class CategorySchema {
    @ApiProperty({
        type: String,
        example: 'Phones',
        minLength: 2,
        maxLength: 50,
    })
    title: string;
}
