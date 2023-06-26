import { IsString } from "class-validator";

export class LoginUserDTO {
    @IsString()
    email: string;

    @IsString()
    password: string;
}

export class LoginResponseDTO {
    accessToken : string;
}