import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CleaningTasksController } from './cleaning-task.controller';
import { CleaningTasksService } from './cleaning-tasks.service';
import { CleaningTask, CleaningTaskSchema } from './cleaning-task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CleaningTask.name, schema: CleaningTaskSchema },
    ]),
  ],
  controllers: [CleaningTasksController],
  providers: [CleaningTasksService],
})
export class CleaningTasksModule {}
