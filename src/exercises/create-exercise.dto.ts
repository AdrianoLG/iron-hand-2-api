import { User } from 'src/users/user.schema';

export class CreateExerciseDto {
  readonly id: string;
  readonly exercise: string;
  readonly category: string;
  readonly bodyParts: Array<string>;
  readonly minutes: number;
  readonly minPPM: number;
  readonly maxPPM: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
