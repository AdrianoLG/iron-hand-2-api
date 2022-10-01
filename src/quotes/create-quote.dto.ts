import { User } from 'src/users/user.schema';

export class CreateQuoteDto {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
