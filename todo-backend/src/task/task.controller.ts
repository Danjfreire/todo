import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('board/:boardId/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(
    @Param('boardId') boardId : string,
    @Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(+boardId,createTaskDto);
  }

  @Get()
  async findAll(
    @Param('boardId') boardId : string,
  ) {
    return await this.taskService.findAll(+boardId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    await this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.taskService.remove(+id);
  }
}
