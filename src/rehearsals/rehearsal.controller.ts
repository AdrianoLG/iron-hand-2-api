import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { RehearsalsService } from './rehearsals.service';
import { CreateRehearsalDto } from './create-rehearsal.dto';
import { Rehearsal } from './rehearsal.schema';
import { UpdateRehearsalDto } from './update-rehearsal.dto';

@Controller('rehearsals')
export class RehearsalsController {
  constructor(private readonly rehearsalsService: RehearsalsService) {}

  @Post()
  async create(@Body() createRehearsalDto: CreateRehearsalDto) {
    await this.rehearsalsService.create(createRehearsalDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRehearsalDto: UpdateRehearsalDto,
  ) {
    await this.rehearsalsService.update(id, updateRehearsalDto);
  }

  @Get()
  async findAll(): Promise<Rehearsal[]> {
    return this.rehearsalsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Rehearsal> {
    return this.rehearsalsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.rehearsalsService.delete(id);
  }
}
