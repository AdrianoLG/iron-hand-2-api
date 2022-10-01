import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSpecieDto } from './create-specie.dto';
import { Specie, SpecieDocument } from './specie.schema';
import { UpdateSpecieDto } from './update-specie.dto';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectModel(Specie.name)
    private readonly specieModel: Model<SpecieDocument>,
  ) {}

  async create(createSpecieDto: CreateSpecieDto): Promise<Specie> {
    const createdSpecie = await this.specieModel.create(createSpecieDto);
    return createdSpecie;
  }

  async update(id: string, updateData: UpdateSpecieDto) {
    const updatedSpecie = await this.specieModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate(['name', 'image', 'thc', 'indica', 'sativa', 'days', 'weight']);
    return updatedSpecie;
  }

  async findAll(): Promise<Specie[]> {
    return this.specieModel.find().exec();
  }

  async findOne(id: string): Promise<Specie> {
    return this.specieModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedSpecie = await this.specieModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedSpecie;
  }
}
