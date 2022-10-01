import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './create-budget.dto';
import { Budget } from './budget.schema';
import { UpdateBudgetDto } from './update-budget.dto';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  async create(@Body() createBudgetDto: CreateBudgetDto) {
    await this.budgetsService.create(createBudgetDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ) {
    await this.budgetsService.update(id, updateBudgetDto);
  }

  @Get()
  async findAll(): Promise<Budget[]> {
    return this.budgetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Budget> {
    return this.budgetsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.budgetsService.delete(id);
  }
}
