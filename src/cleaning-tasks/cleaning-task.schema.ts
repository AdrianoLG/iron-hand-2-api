import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';

export type CleaningTaskDocument = CleaningTask & Document;

@Schema({ timestamps: true })
export class CleaningTask {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  places: Array<string>;

  @Prop({ required: true })
  date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CleaningTaskSchema = SchemaFactory.createForClass(CleaningTask);
