import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecipeDto } from './create-recipe.dto';
import { Recipe, RecipeDocument } from './recipe.schema';
import { UpdateRecipeDto } from './update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name)
    private readonly recipeModel: Model<RecipeDocument>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const createdRecipe = await this.recipeModel.create(createRecipeDto);
    return createdRecipe;
  }

  async update(id: string, updateData: UpdateRecipeDto) {
    const updatedRecipe = await this.recipeModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate(['name', 'ingredients', 'instructions', 'images']);
    return updatedRecipe;
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  async findOne(id: string): Promise<Recipe> {
    return this.recipeModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedRecipe = await this.recipeModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedRecipe;
  }
}
