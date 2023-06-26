import { IsString } from "class-validator";

export class ResetPasswordRequestDTO {
    @IsString()
    token: string;

    @IsString()
    newPassword: string;
}

export class ResetPasswordResponseDTO {
    @IsString()
    passwordChanged : string;
}