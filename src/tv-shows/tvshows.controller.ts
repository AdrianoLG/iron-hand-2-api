import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { TVShowsService } from './tvshows.service';
import { CreateTVShowDto } from './create-tvshow.dto';
import { TVShow } from './tvshow.schema';
import { UpdateTVShowDto } from './update-tvshow.dto';

@Controller('tvshows')
export class TVShowsController {
  constructor(private readonly tvshowsService: TVShowsService) {}

  @Post()
  async create(@Body() createTVShowDto: CreateTVShowDto) {
    await this.tvshowsService.create(createTVShowDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTVShowDto: UpdateTVShowDto,
  ) {
    await this.tvshowsService.update(id, updateTVShowDto);
  }

  @Get()
  async findAll(): Promise<TVShow[]> {
    return this.tvshowsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TVShow> {
    return this.tvshowsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tvshowsService.delete(id);
  }
}
