import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './create-todo.dto';
import { Todo, TodoDocument } from './todo.schema';
import { UpdateTodoDto } from './update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = await this.todoModel.create(createTodoDto);
    return createdTodo;
  }

  async update(id: string, updateData: UpdateTodoDto) {
    const updatedTodo = await this.todoModel
      .findByIdAndUpdate({ _id: id }, updateData, {
        new: true,
      })
      .populate(['completed', 'completedAt', 'task']);
    return updatedTodo;
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedTodo = await this.todoModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedTodo;
  }
}
