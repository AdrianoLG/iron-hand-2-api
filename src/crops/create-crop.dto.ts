import { Specie } from 'src/species/specie.schema';
import { User } from 'src/users/user.schema';

export class Plant {
  readonly id: string;
  readonly name: string;
  readonly species: string;
  readonly germinated: Date;
  readonly death: Date;
  readonly harvest: Date;
  readonly comments: string;
}

export class Fertilizers {
  readonly gro: number;
  readonly bloom: number;
  readonly micro: number;
  readonly fulvic: number;
  readonly pro: number;
  readonly clean: number;
  readonly final: number;
  readonly pk1314: number;
}

export class Watering {
  readonly id: string;
  readonly date: Date;
  readonly fertilizers: Fertilizers;
}

export class CreateCropDto {
  readonly id: string;
  readonly name: string;
  readonly date: Date;
  readonly plants: Array<Plant>;
  readonly waterings: Array<Watering>;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly gallery: Array<string>;
  readonly species: Array<Specie>;
  readonly user: User;
}
