import { IsString, Matches, MinLength, IsBoolean } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    password: string;

    @IsString()
    city: string;
}

export class RegisterResponseDto {
    success: boolean;
}