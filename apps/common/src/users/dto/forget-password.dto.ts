import { IsString } from "class-validator";

export class ForgetPasswordDTO {
    @IsString()
    email: string;
}

export class ForgetPasswordResponseDto {
    @IsString()
    forgetPasswordToken : string;
}