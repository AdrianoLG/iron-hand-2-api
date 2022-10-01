import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';
export type TVShowDocument = TVShow & Document;

@Schema({ timestamps: true })
export class TVShow {
  @Prop({ required: true })
  title: string;

  @Prop()
  director: string;

  @Prop()
  cast: Array<string>;

  @Prop()
  tv: string;

  @Prop()
  country: string;

  @Prop()
  start: Date;

  @Prop()
  categories: Array<string>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TVShowSchema = SchemaFactory.createForClass(TVShow);
