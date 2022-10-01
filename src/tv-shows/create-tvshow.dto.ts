import { User } from 'src/users/user.schema';

export class CreateTVShowDto {
  readonly id: string;
  readonly title: string;
  readonly director: string;
  readonly cast: Array<string>;
  readonly tv: string;
  readonly country: string;
  readonly start: Date;
  readonly categories: Array<string>;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
