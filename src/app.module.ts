import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHostname = process.env.MONGO_HOSTNAME;
const mongoPort = process.env.MONGO_PORT;

const url = `mongodb://${mongoUser}:${mongoPassword}@${mongoHostname}:${mongoPort}`;

@Module({
  imports: [
    MongooseModule.forRoot(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'ironhand',
    }),
    TodosModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
