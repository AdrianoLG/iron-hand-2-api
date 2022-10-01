import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCocktailDto } from './create-cocktail.dto';
import { Cocktail, CocktailDocument } from './cocktail.schema';
import { UpdateCocktailDto } from './update-cocktail.dto';

@Injectable()
export class CocktailsService {
  constructor(
    @InjectModel(Cocktail.name)
    private readonly cocktailModel: Model<CocktailDocument>,
  ) {}

  async create(createCocktailDto: CreateCocktailDto): Promise<Cocktail> {
    const createdCocktail = await this.cocktailModel.create(createCocktailDto);
    return createdCocktail;
  }

  async update(id: string, updateData: UpdateCocktailDto) {
    const updatedCocktail = await this.cocktailModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate(['name', 'ingredients', 'instructions', 'images']);
    return updatedCocktail;
  }

  async findAll(): Promise<Cocktail[]> {
    return this.cocktailModel.find().exec();
  }

  async findOne(id: string): Promise<Cocktail> {
    return this.cocktailModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCocktail = await this.cocktailModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCocktail;
  }
}
