import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTVShowDto } from './create-tvshow.dto';
import { TVShow, TVShowDocument } from './tvshow.schema';
import { UpdateTVShowDto } from './update-tvshow.dto';

@Injectable()
export class TVShowsService {
  constructor(
    @InjectModel(TVShow.name)
    private readonly tvshowModel: Model<TVShowDocument>,
  ) {}

  async create(createTVShowDto: CreateTVShowDto): Promise<TVShow> {
    const createdTVShow = await this.tvshowModel.create(createTVShowDto);
    return createdTVShow;
  }

  async update(id: string, updateData: UpdateTVShowDto) {
    const updatedTVShow = await this.tvshowModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate([
        'title',
        'director',
        'cast',
        'tv',
        'country',
        'start',
        'categories',
      ]);
    return updatedTVShow;
  }

  async findAll(): Promise<TVShow[]> {
    return this.tvshowModel.find().exec();
  }

  async findOne(id: string): Promise<TVShow> {
    return this.tvshowModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedTVShow = await this.tvshowModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedTVShow;
  }
}
