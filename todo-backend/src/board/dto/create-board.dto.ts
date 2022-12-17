import { Board } from "@prisma/client";
import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateBoardDto implements Partial<Board> {

    @IsString()
    name: string;

    @IsNumber()
    @IsPositive()
    ownerId: number;
}
