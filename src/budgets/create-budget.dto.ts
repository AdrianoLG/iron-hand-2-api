import { User } from 'src/users/user.schema';

export class Expense {
  readonly id: string;
  readonly type: string;
  readonly concept: string;
  readonly estimated: number;
  readonly real: number;
  readonly state: string;
}

export class Income {
  readonly id: string;
  readonly quantity: string;
  readonly concept: string;
  readonly comments: string;
}

export class CreateBudgetDto {
  readonly id: string;
  readonly month: Date;
  readonly totalIncome: number;
  readonly totalExpense: number;
  readonly expenses: Array<Expense>;
  readonly incomes: Array<Income>;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly user: User;
}
