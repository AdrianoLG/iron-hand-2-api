import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';
export type CocktailDocument = Cocktail & Document;

@Schema({ timestamps: true })
export class Cocktail {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  ingredients: Array<string>;

  @Prop()
  instructions: Array<string>;

  @Prop()
  images: Array<string>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CocktailSchema = SchemaFactory.createForClass(Cocktail);
