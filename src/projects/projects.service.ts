import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './create-project.dto';
import { Project, ProjectDocument } from './project.schema';
import { UpdateProjectDto } from './update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<ProjectDocument>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProject = await this.projectModel.create(createProjectDto);
    return createdProject;
  }

  async update(id: string, updateData: UpdateProjectDto) {
    const updatedTodo = await this.projectModel
      .findByIdAndUpdate({ _id: id }, updateData)
      .populate(['todo', 'doing', 'done']);
    return updatedTodo;
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedProject = await this.projectModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedProject;
  }
}
