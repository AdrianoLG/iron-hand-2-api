import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCropDto } from './create-crop.dto';
import { Crop, CropDocument } from './crop.schema';
import { UpdateCropDto } from './update-crop.dto';

@Injectable()
export class CropsService {
  constructor(
    @InjectModel(Crop.name)
    private readonly cropModel: Model<CropDocument>,
  ) {}

  async create(createCropDto: CreateCropDto): Promise<Crop> {
    const createdCrop = await this.cropModel.create(createCropDto);
    await createdCrop.populate('species');
    return createdCrop;
  }

  async update(id: string, updateData: UpdateCropDto) {
    const updatedCrop = await this.cropModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate(['name', 'date', 'plants', 'waterings', 'gallery', 'species']);
    return updatedCrop;
  }

  async findAll(): Promise<Crop[]> {
    return this.cropModel.find().populate('species').exec();
  }

  async findOne(id: string): Promise<Crop> {
    return this.cropModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCrop = await this.cropModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCrop;
  }
}
