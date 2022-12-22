import { Controller, Get, Post, Body, Param, Delete, NotFoundException, BadRequestException, ForbiddenException, InternalServerErrorException, Put } from '@nestjs/common';
import { Board } from '@prisma/client';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) { }

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    try {
     // change this to resolve the ownerId to the requester id
    // solve with auth
    const ownerId = 1; 
      return await this.boardService.create(ownerId,createBoardDto);
    } catch (error) {
      if (error.message === 'user-not-found') throw new NotFoundException('user not found!');
    }
  }

  @Get()
  async findAll(): Promise<Board[]> {
    // change this to resolve the ownerId to the requester id
    // solve with auth
    const ownerId = 1;
    return await this.boardService.findAll(ownerId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      // change this to resolve the ownerId to the requester id
      // solve with auth
      const ownerId = 1;
      return await this.boardService.findOne(+id, ownerId);
    } catch (error) {
      switch (error.message) {
        case 'board-not-found': throw new NotFoundException('board not found!');
        case 'board-not-owned': throw new ForbiddenException('cannot access this board!');
        default: throw new InternalServerErrorException('unknown error');
      }
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    // change this to resolve the ownerId to the requester id
    // solve with auth
    const ownerId = 1;
    await this.boardService.update(+id, ownerId, updateBoardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // change this to resolve the ownerId to the requester id
    // solve with auth
    const ownerId = 1;
    await this.boardService.remove(+id, ownerId);
  }
}
