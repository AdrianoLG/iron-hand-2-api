import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';
import { Sheet } from './create-rehearsal.dto';

export type RehearsalDocument = Rehearsal & Document;

@Schema({ timestamps: true })
export class Rehearsal {
  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  instrument: string;

  @Prop({ required: true })
  sheets: Array<Sheet>;

  @Prop({ required: true })
  totalTime: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const RehearsalSchema = SchemaFactory.createForClass(Rehearsal);
