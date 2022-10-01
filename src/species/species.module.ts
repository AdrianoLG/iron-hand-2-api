import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';
import { Specie, SpecieSchema } from './specie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Specie.name, schema: SpecieSchema }]),
  ],
  controllers: [SpeciesController],
  providers: [SpeciesService],
})
export class SpeciesModule {}
