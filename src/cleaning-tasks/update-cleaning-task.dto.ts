import { IsOptional } from 'class-validator';

export class UpdateCleaningTaskDto {
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly places: Array<string>;

  @IsOptional()
  readonly date: Date;

  readonly updatedAt: Date;
}
