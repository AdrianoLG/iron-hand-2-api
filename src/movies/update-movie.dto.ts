import { IsOptional } from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  readonly title: string;

  @IsOptional()
  readonly director: string;

  @IsOptional()
  readonly year: number;

  @IsOptional()
  readonly cast: Array<string>;

  @IsOptional()
  readonly categories: Array<string>;

  @IsOptional()
  readonly duration: number;

  @IsOptional()
  readonly rating: number;

  readonly updatedAt: Date;
}
