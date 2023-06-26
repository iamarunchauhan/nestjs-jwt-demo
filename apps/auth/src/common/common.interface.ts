import { Observable } from 'rxjs';
import { CreateUserDTO, RegisterResponseDto } from '../dto/create-user.dto';
import { ForgetPasswordDTO, ForgetPasswordResponseDto } from '../dto/forget-password.dto';
import { LoginResponseDto, LoginUserDTO } from '../dto/login-user.dto';
import { ResetPasswordRequestDTO, ResetPasswordResponseDTO } from '../dto/reset-password.dto';

interface CommonGrpcServicesInterface {
  find(req: IUser): Observable<any>;
  register(createUserDto : CreateUserDTO): Observable<RegisterResponseDto>;
  login(loginUserDto : LoginUserDTO) : Observable<LoginResponseDto>;
  forgetpassword(forgetPasswordDTO : ForgetPasswordDTO) : Observable<ForgetPasswordResponseDto>;
  resetpassword(resetPasswordRequestDTO : ResetPasswordRequestDTO) : Observable<ResetPasswordResponseDTO>;
  fetchdetails(req : Request) : Observable<any>;
}

interface IUser {
  user: string;
}

export { CommonGrpcServicesInterface };