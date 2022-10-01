import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { SpeciesService } from './species.service';
import { CreateSpecieDto } from './create-specie.dto';
import { Specie } from './specie.schema';
import { UpdateSpecieDto } from './update-specie.dto';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Post()
  async create(@Body() createSpecieDto: CreateSpecieDto) {
    await this.speciesService.create(createSpecieDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSpecieDto: UpdateSpecieDto,
  ) {
    await this.speciesService.update(id, updateSpecieDto);
  }

  @Get()
  async findAll(): Promise<Specie[]> {
    return this.speciesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Specie> {
    return this.speciesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.speciesService.delete(id);
  }
}
