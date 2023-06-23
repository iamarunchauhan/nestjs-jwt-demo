import { IsString, Matches, MinLength } from 'class-validator';

export class CreateNewUserDTO {
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
