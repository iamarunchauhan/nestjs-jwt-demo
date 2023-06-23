import { CommonService } from './common/common.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
import { Users } from './entities/user.entity';
export declare class AuthService {
    private readonly commonService;
    constructor(commonService: CommonService);
    find(): Promise<any>;
    register(createUserDto: CreateUserDTO): Promise<Users>;
    login(loginUserDto: LoginUserDTO): Promise<LoginResponseDto>;
}
