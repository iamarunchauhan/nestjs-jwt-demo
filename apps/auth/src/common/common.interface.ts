import { Observable } from 'rxjs';
import { CreateUserDTO } from '../dto/create-user.dto';
import { LoginResponseDto, LoginUserDTO } from '../dto/login-user.dto';
import { Users } from '../entities/user.entity';

interface CommonGrpcServicesInterface {
  find(req: IUser): Observable<any>;
  register(createUserDto : CreateUserDTO): Observable<Users>;
  login(loginUserDto : LoginUserDTO) : Observable<LoginResponseDto>;
}

interface IUser {
  user: string;
}

export { CommonGrpcServicesInterface };
