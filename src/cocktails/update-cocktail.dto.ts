import { IsOptional } from 'class-validator';

export class UpdateCocktailDto {
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly ingredients: Array<string>;

  @IsOptional()
  readonly instructions: Array<string>;

  @IsOptional()
  readonly images: Array<string>;

  readonly updatedAt: Date;
}
