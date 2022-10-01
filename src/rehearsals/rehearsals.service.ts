import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRehearsalDto } from './create-rehearsal.dto';
import { Rehearsal, RehearsalDocument } from './rehearsal.schema';
import { UpdateRehearsalDto } from './update-rehearsal.dto';

@Injectable()
export class RehearsalsService {
  constructor(
    @InjectModel(Rehearsal.name)
    private readonly rehearsalModel: Model<RehearsalDocument>,
  ) {}

  async create(createRehearsalDto: CreateRehearsalDto): Promise<Rehearsal> {
    const createdRehearsal = await this.rehearsalModel.create(
      createRehearsalDto,
    );
    return createdRehearsal;
  }

  async update(id: string, updateData: UpdateRehearsalDto) {
    const updatedRehearsal = await this.rehearsalModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate(['date', 'instrument', 'sheets', 'totalTime']);
    return updatedRehearsal;
  }

  async findAll(): Promise<Rehearsal[]> {
    return this.rehearsalModel.find().exec();
  }

  async findOne(id: string): Promise<Rehearsal> {
    return this.rehearsalModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedRehearsal = await this.rehearsalModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedRehearsal;
  }
}
