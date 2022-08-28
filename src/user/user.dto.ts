import { IsEmail, IsString, MinLength } from "class-validator";

export class UserDto {
    @IsEmail()
    email: string;

    @MinLength(6, {
        message: "At least 6 characters required!"
    })
    password?: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    avatarPath: string;
}