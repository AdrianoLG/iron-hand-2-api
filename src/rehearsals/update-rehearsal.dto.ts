import { IsOptional } from 'class-validator';
import { Sheet } from './create-rehearsal.dto';

export class UpdateRehearsalDto {
  @IsOptional()
  readonly date: Date;

  @IsOptional()
  readonly instrument: string;

  @IsOptional()
  readonly sheets: Array<Sheet>;

  @IsOptional()
  readonly totalTime: number;

  readonly updatedAt: Date;
}
