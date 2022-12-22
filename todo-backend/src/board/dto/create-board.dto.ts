import { Board } from "@prisma/client";
import { IsString } from "class-validator";

export class CreateBoardDto implements Partial<Board> {

    @IsString()
    name: string;

}
