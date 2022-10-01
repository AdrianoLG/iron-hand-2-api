import { User } from 'src/users/user.schema';

export class CreateMovieDto {
  readonly id: string;
  readonly title: string;
  readonly director: string;
  readonly year: Date;
  readonly cast: Array<string>;
  readonly categories: Array<string>;
  readonly duration: number;
  readonly rating: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
