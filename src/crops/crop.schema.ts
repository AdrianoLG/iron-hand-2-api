import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';
import { Plant, Watering } from './create-crop.dto';

export type CropDocument = Crop & Document;

@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class Crop {
  @Prop({ required: true })
  name: string;

  @Prop()
  date: Date;

  @Prop()
  plants: Array<Plant>;

  @Prop()
  waterings: Array<Watering>;

  @Prop()
  gallery: Array<string>;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Specie' }])
  species!: mongoose.Schema.Types.ObjectId[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CropSchema = SchemaFactory.createForClass(Crop);
