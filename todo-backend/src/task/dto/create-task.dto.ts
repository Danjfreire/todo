import { IsEnum, IsOptional, IsString } from "class-validator";

const validStatus = ['backlog', 'doing', 'closed']

export class CreateTaskDto {

    @IsString()
    title : string;

    @IsEnum(validStatus)
    status : string;

    @IsOptional()
    @IsString()
    description : string;
}
