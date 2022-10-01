import { User } from 'src/users/user.schema';

export class CreateBookDto {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly pages: number;
  readonly editorial: string;
  readonly category: string;
  readonly image: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
