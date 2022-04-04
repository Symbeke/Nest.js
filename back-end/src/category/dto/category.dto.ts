import { MinLength, MaxLength  } from 'class-validator';

export class CategoryDto {
    @MinLength(2)
    @MaxLength(50)
    title: string;
}
