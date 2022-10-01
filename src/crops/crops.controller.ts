import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { CropsService } from './crops.service';
import { CreateCropDto } from './create-crop.dto';
import { Crop } from './crop.schema';
import { UpdateCropDto } from './update-crop.dto';

@Controller('crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) {}

  @Post()
  async create(@Body() createCropDto: CreateCropDto) {
    await this.cropsService.create(createCropDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCropDto: UpdateCropDto) {
    await this.cropsService.update(id, updateCropDto);
  }

  @Get()
  async findAll(): Promise<Crop[]> {
    return this.cropsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Crop> {
    return this.cropsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.cropsService.delete(id);
  }
}
