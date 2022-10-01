import { User } from 'src/users/user.schema';

export class Sheet {
  readonly title: string;
  readonly author: string;
  readonly time: number;
}

export class CreateRehearsalDto {
  readonly id: string;
  readonly date: Date;
  readonly instrument: string;
  readonly sheets: Array<Sheet>;
  readonly totalTime: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
