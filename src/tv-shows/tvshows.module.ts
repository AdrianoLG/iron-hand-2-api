import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TVShowsController } from './tvshows.controller';
import { TVShowsService } from './tvshows.service';
import { TVShow, TVShowSchema } from './tvshow.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TVShow.name, schema: TVShowSchema }]),
  ],
  controllers: [TVShowsController],
  providers: [TVShowsService],
})
export class TVShowsModule {}
