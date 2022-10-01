import { IsOptional } from 'class-validator';

export class UpdateBudgetDto {
  @IsOptional()
  readonly exercise: string;

  @IsOptional()
  readonly category: string;

  @IsOptional()
  readonly bodyParts: Array<string>;

  @IsOptional()
  readonly minutes: number;

  @IsOptional()
  readonly minPPM: number;

  @IsOptional()
  readonly maxPPM: number;

  readonly updatedAt: Date;
}
