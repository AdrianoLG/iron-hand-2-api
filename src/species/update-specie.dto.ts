import { IsOptional } from 'class-validator';

export class UpdateSpecieDto {
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly image: string;

  @IsOptional()
  readonly thc: number;

  @IsOptional()
  readonly indica: number;

  @IsOptional()
  readonly sativa: number;

  @IsOptional()
  readonly days: number;

  @IsOptional()
  readonly weight: number;

  readonly updatedAt: Date;
}
