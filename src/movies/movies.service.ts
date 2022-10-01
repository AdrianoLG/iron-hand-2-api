import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './create-movie.dto';
import { Movie, MovieDocument } from './movies.schema';
import { UpdateMovieDto } from './update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = await this.movieModel.create(createMovieDto);
    return createdMovie;
  }

  async update(id: string, updateData: UpdateMovieDto) {
    const updatedMovie = await this.movieModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate([
        'title',
        'director',
        'year',
        'cast',
        'categories',
        'duration',
        'rating',
      ]);
    return updatedMovie;
  }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedMovie = await this.movieModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedMovie;
  }
}
