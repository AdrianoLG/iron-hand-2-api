import { IsOptional } from 'class-validator';
import { User } from 'src/users/user.schema';

export class UpdateTodoDto {
  @IsOptional()
  readonly id: string;
  @IsOptional()
  readonly completed: boolean;
  @IsOptional()
  readonly task: string;
  @IsOptional()
  readonly user: User;
}
