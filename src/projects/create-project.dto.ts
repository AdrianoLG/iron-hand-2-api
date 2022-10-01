import { User } from 'src/users/user.schema';

export class CreateProjectDto {
  readonly id: string;
  readonly name: string;
  readonly todo: [
    {
      readonly title: string;
      readonly description: string;
      readonly tags: Array<string>;
    },
  ];
  readonly doing: [
    {
      readonly title: string;
      readonly description: string;
      readonly tags: Array<string>;
    },
  ];
  readonly done: [
    {
      readonly title: string;
      readonly description: string;
      readonly tags: Array<string>;
    },
  ];
  readonly user: User;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly completedAt: Date;
}
