import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseSchema {
    @ApiProperty({
        type: String,
        example: 'Phones',
        minLength: 2,
        maxLength: 50,
    })
    title: string;
}