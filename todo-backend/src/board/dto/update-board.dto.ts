import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {
    
    @IsString()
    name?: string;
}
