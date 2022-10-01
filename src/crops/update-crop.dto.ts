import { IsOptional } from 'class-validator';
import { Specie } from 'src/species/specie.schema';
import { Plant, Watering } from './create-crop.dto';

export class UpdateCropDto {
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly date: string;

  @IsOptional()
  readonly plants: Array<Plant>;

  @IsOptional()
  readonly waterings: Array<Watering>;

  @IsOptional()
  readonly gallery: Array<string>;

  @IsOptional()
  readonly species: Array<Specie>;

  readonly updatedAt: Date;
}
