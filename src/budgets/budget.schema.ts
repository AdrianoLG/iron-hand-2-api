import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';
import { Expense, Income } from './create-budget.dto';

export type BudgetDocument = Budget & Document;

@Schema({ timestamps: true })
export class Budget {
  @Prop({ required: true })
  month: Date;

  @Prop()
  totalIncome: number;

  @Prop()
  totalExpense: number;

  @Prop()
  expenses: Array<Expense>;

  @Prop()
  incomes: Array<Income>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
