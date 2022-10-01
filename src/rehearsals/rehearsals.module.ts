import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RehearsalsController } from './rehearsal.controller';
import { RehearsalsService } from './rehearsals.service';
import { Rehearsal, RehearsalSchema } from './rehearsal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rehearsal.name, schema: RehearsalSchema },
    ]),
  ],
  controllers: [RehearsalsController],
  providers: [RehearsalsService],
})
export class RehearsalsModule {}
