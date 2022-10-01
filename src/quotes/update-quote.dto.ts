import { IsOptional } from 'class-validator';

export class UpdateQuoteDto {
  @IsOptional()
  readonly quote: string;

  @IsOptional()
  readonly author: string;

  readonly updatedAt: Date;
}
