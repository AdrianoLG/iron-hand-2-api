import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';

export type SpecieDocument = Specie & Document;

@Schema({ timestamps: true })
export class Specie {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop()
  thc: number;

  @Prop()
  indica: number;

  @Prop()
  sativa: number;

  @Prop()
  days: number;

  @Prop()
  weight: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const SpecieSchema = SchemaFactory.createForClass(Specie);

SpecieSchema.virtual('crops', {
  ref: 'Crop',
  localField: '_id',
  foreignField: 'species',
});
