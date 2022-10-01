import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExerciseDto } from './create-exercise.dto';
import { Exercise, ExerciseDocument } from './exercise.schema';
import { UpdateExerciseDto } from './update-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name)
    private readonly exerciseModel: Model<ExerciseDocument>,
  ) {}

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const createdExercise = await this.exerciseModel.create(createExerciseDto);
    return createdExercise;
  }

  async update(id: string, updateData: UpdateExerciseDto) {
    const updatedExercise = await this.exerciseModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate([
        'exercise',
        'category',
        'bodyParts',
        'minutes',
        'minPPM',
        'maxPPM',
      ]);
    return updatedExercise;
  }

  async findAll(): Promise<Exercise[]> {
    return this.exerciseModel.find().exec();
  }

  async findOne(id: string): Promise<Exercise> {
    return this.exerciseModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedExercise = await this.exerciseModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedExercise;
  }
}
