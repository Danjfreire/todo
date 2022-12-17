import { Injectable } from '@nestjs/common';
import { Board } from '@prisma/client';
import { PrismaService } from '../@shared/prisma/prisma.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {

  constructor(
    private prisma: PrismaService
  ) { }

  async create(data: CreateBoardDto): Promise<Board> {
    // check if user exists
    const user = await this.prisma.user.findUnique({ where: { id: data.ownerId } });

    if (!user) {
      throw new Error("user-not-found");
    }

    return await this.prisma.board.create({ data })
  }

  async findAll(ownerId: number): Promise<Board[]> {
    return await this.prisma.board.findMany({ where: { ownerId } });
  }

  async findOne(id: number, ownerId: number) {
    const board = await this.prisma.board.findUnique({ where: { id } });

    if (!board) {
      throw new Error('board-not-found')
    }


    if (board.ownerId !== ownerId) {
      throw new Error('board-not-owned')
    }

    return board;
  }

  async update(id: number, ownerId: number, data: UpdateBoardDto) {
    return await this.prisma.board.updateMany({ where: { id, ownerId }, data });
  }

  async remove(id: number, ownerId: number) {
    return await this.prisma.board.deleteMany({ where: { id, ownerId } });
  }
}
