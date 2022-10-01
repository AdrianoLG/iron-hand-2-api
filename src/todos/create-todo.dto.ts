import { User } from 'src/users/user.schema';

export class CreateTodoDto {
  readonly id: string;
  readonly completed: boolean;
  readonly task: string;
  readonly user: User;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly completedAt: Date;
}
