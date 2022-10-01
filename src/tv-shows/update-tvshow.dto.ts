import { IsOptional } from 'class-validator';

export class UpdateTVShowDto {
  @IsOptional()
  readonly title: string;

  @IsOptional()
  readonly director: string;

  @IsOptional()
  readonly cast: number;

  @IsOptional()
  readonly tv: string;

  @IsOptional()
  readonly country: string;

  @IsOptional()
  readonly start: Date;

  @IsOptional()
  readonly categories: Array<string>;

  readonly updatedAt: Date;
}
