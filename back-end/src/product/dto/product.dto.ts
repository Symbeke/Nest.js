import { Min, Max, MinLength, MaxLength } from "class-validator";

export class ProductDto {
    @MinLength(2)
    @MaxLength(50)
    title: string;
    @MinLength(2)
    @MaxLength(255)
    description: string;
    @Min(1)
    @Max(1_000_000)
    price: number;
    @Min(1)
    categoryId: number;
}
