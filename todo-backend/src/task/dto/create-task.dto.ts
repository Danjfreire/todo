import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus, validStatus } from "../model/task-status.model";

export class CreateTaskDto {

    @IsString()
    title : string;

    @IsEnum(validStatus)
    status : TaskStatus;

    @IsOptional()
    @IsString()
    description : string;
}
