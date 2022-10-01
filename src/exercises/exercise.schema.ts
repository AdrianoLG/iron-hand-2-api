import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';

export type ExerciseDocument = Exercise & Document;

@Schema({ timestamps: true })
export class Exercise {
  @Prop({ required: true })
  exercise: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  bodyParts: Array<string>;

  @Prop()
  minutes: number;

  @Prop()
  minPPM: number;

  @Prop()
  maxPPM: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
  static exercise: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
