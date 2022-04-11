import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  @IsNotEmpty()
  name: string;

  @Prop({ type: String })
  @IsEmail()
  @IsNotEmpty()
  email: {
    unique: true;
  };

  @Prop()
  @IsNotEmpty()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
