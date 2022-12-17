import { User } from "@prisma/client";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto implements Partial<User>{
    
    @IsEmail()
    email: string;

    @IsString()
    name: string;
}
