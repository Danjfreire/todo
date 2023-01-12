import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus, validStatus } from '../model/task-status.model';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @IsString()
    title : string;

    @IsEnum(validStatus)
    status : TaskStatus;

    @IsOptional()
    @IsString()
    description : string;
}
