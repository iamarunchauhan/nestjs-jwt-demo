import { IsString, Matches, MinLength, IsBoolean } from 'class-validator';

export class CreateUserDTO {
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
    @IsBoolean()
    success: boolean;
}
