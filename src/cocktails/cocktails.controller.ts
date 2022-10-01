import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CreateCocktailDto } from './create-cocktail.dto';
import { Cocktail } from './cocktail.schema';
import { UpdateCocktailDto } from './update-cocktail.dto';

@Controller('cocktails')
export class CocktailsController {
  constructor(private readonly cocktailsService: CocktailsService) {}

  @Post()
  async create(@Body() createCocktailDto: CreateCocktailDto) {
    await this.cocktailsService.create(createCocktailDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCocktailDto: UpdateCocktailDto,
  ) {
    await this.cocktailsService.update(id, updateCocktailDto);
  }

  @Get()
  async findAll(): Promise<Cocktail[]> {
    return this.cocktailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cocktail> {
    return this.cocktailsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.cocktailsService.delete(id);
  }
}
