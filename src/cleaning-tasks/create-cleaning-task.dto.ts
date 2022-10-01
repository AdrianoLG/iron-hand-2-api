import { User } from 'src/users/user.schema';

export class CreateCleaningTaskDto {
  readonly id: string;
  readonly name: string;
  readonly places: Array<string>;
  readonly date: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
