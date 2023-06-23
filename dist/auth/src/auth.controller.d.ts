import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
import { Users } from './entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getHello(): Promise<any>;
    register(createUserDto: CreateUserDTO): Promise<Users>;
    login(loginUserDto: LoginUserDTO): Promise<LoginResponseDto>;
}
