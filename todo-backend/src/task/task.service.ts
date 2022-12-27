import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/@shared/prisma/prisma.service';
import { BoardService } from 'src/board/board.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {

  constructor(
    private prisma: PrismaService,
  ) { }

  async create(boardId: number, data: CreateTaskDto): Promise<Task> {
    return await this.prisma.task.create({ data: { boardId, ...data } })
  }

  async findAll(boardId: number) {
    return await this.prisma.task.findMany({ where: { boardId } });
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
