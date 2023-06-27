import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserSchema{

    @IsString()
    @MaxLength(120)
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    @MaxLength(255)
    email: string;

    @IsNotEmpty()
    password: string
}