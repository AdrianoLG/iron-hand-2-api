import { User } from 'src/users/user.schema';

export class CreateSpecieDto {
  readonly id: string;
  readonly name: string;
  readonly thc: number;
  readonly indica: number;
  readonly sativa: number;
  readonly days: number;
  readonly weight: number;
  readonly user: User;
}
