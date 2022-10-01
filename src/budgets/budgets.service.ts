import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBudgetDto } from './create-budget.dto';
import { Budget, BudgetDocument } from './budget.schema';
import { UpdateBudgetDto } from './update-budget.dto';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectModel(Budget.name)
    private readonly budgetModel: Model<BudgetDocument>,
  ) {}

  async create(createBudgetDto: CreateBudgetDto): Promise<Budget> {
    const createdBudget = await this.budgetModel.create(createBudgetDto);
    return createdBudget;
  }

  async update(id: string, updateData: UpdateBudgetDto) {
    const updatedBudget = await this.budgetModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate([
        'month',
        'totalIncome',
        'totalExpense',
        'expenses',
        'incomes',
      ]);
    return updatedBudget;
  }

  async findAll(): Promise<Budget[]> {
    return this.budgetModel.find().exec();
  }

  async findOne(id: string): Promise<Budget> {
    return this.budgetModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedBudget = await this.budgetModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedBudget;
  }
}
