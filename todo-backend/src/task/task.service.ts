import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/@shared/prisma/prisma.service';
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

  async update(id: number, data: UpdateTaskDto) {
    await this.prisma.task.updateMany({ where: { id }, data })
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    const res = await this.prisma.task.delete({ where: { id } })
    console.log(res)
    return res;
  }
}
