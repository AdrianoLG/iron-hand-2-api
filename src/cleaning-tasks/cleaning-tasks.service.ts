import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCleaningTaskDto } from './create-cleaning-task.dto';
import { CleaningTask, CleaningTaskDocument } from './cleaning-task.schema';
import { UpdateCleaningTaskDto } from './update-cleaning-task.dto';

@Injectable()
export class CleaningTasksService {
  constructor(
    @InjectModel(CleaningTask.name)
    private readonly rehearsalModel: Model<CleaningTaskDocument>,
  ) {}

  async create(
    createCleaningTaskDto: CreateCleaningTaskDto,
  ): Promise<CleaningTask> {
    const createdCleaningTask = await this.rehearsalModel.create(
      createCleaningTaskDto,
    );
    return createdCleaningTask;
  }

  async update(id: string, updateData: UpdateCleaningTaskDto) {
    const updatedCleaningTask = await this.rehearsalModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate(['name', 'date', 'places']);
    return updatedCleaningTask;
  }

  async findAll(): Promise<CleaningTask[]> {
    return this.rehearsalModel.find().exec();
  }

  async findOne(id: string): Promise<CleaningTask> {
    return this.rehearsalModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCleaningTask = await this.rehearsalModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCleaningTask;
  }
}
