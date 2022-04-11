import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ default: 0 })
  completed: boolean;

  @Prop()
  task: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
