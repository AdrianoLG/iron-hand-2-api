import { IsOptional } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  readonly title: string;

  @IsOptional()
  readonly author: string;

  @IsOptional()
  readonly pages: number;

  @IsOptional()
  readonly editorial: string;

  @IsOptional()
  readonly category: string;

  @IsOptional()
  readonly image: string;

  readonly updatedAt: Date;
}
