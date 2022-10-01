import { User } from 'src/users/user.schema';

export class CreateCocktailDto {
  readonly id: string;
  readonly name: string;
  readonly ingredients: Array<string>;
  readonly instructions: Array<string>;
  readonly images: Array<string>;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
