import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { CleaningTasksService } from './cleaning-tasks.service';
import { CreateCleaningTaskDto } from './create-cleaning-task.dto';
import { CleaningTask } from './cleaning-task.schema';
import { UpdateCleaningTaskDto } from './update-cleaning-task.dto';

@Controller('cleaning-tasks')
export class CleaningTasksController {
  constructor(private readonly cleaningTasksService: CleaningTasksService) {}

  @Post()
  async create(@Body() createCleaningTaskDto: CreateCleaningTaskDto) {
    await this.cleaningTasksService.create(createCleaningTaskDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCleaningTaskDto: UpdateCleaningTaskDto,
  ) {
    await this.cleaningTasksService.update(id, updateCleaningTaskDto);
  }

  @Get()
  async findAll(): Promise<CleaningTask[]> {
    return this.cleaningTasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CleaningTask> {
    return this.cleaningTasksService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.cleaningTasksService.delete(id);
  }
}
