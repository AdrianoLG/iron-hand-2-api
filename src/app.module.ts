import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { ExercisesModule } from './exercises/exercises.module';
import { RehearsalsModule } from './rehearsals/rehearsals.module';
import { CleaningTasksModule } from './cleaning-tasks/cleaning-tasks.module';
import { BudgetsModule } from './budgets/budgets.module';
import { CropsModule } from './crops/crops.module';
import { SpeciesModule } from './species/species.module';
import { BooksModule } from './books/books.module';
import { TVShowsModule } from './tv-shows/tvshows.module';
import { MoviesModule } from './movies/movies.module';
import { QuotesModule } from './quotes/quotes.module';
import { RecipesModule } from './recipes/recipes.module';
import { CocktailsModule } from './cocktails/cocktails.module';

ConfigModule.forRoot();

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHostname = process.env.MONGO_HOSTNAME;
const mongoPort = process.env.MONGO_PORT;
const mongoDB = process.env.MONGO_DB;

const url = `mongodb://${mongoUser}:${mongoPassword}@${mongoHostname}:${mongoPort}`;

@Module({
  imports: [
    MongooseModule.forRoot(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: mongoDB,
    }),
    TodosModule,
    UsersModule,
    ProjectsModule,
    ExercisesModule,
    RehearsalsModule,
    CleaningTasksModule,
    BudgetsModule,
    CropsModule,
    SpeciesModule,
    BooksModule,
    TVShowsModule,
    MoviesModule,
    QuotesModule,
    RecipesModule,
    CocktailsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
