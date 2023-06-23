import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseDto, UserDto } from './dto/accounts.dto';
import { Users } from './entities/user.entity';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(userRes: UserDto): Promise<ResponseDto>;
    register(createUserDto: CreateUserDto): Promise<Users>;
    login(loginUserDto: LoginUserDTO): Promise<LoginResponseDto>;
}
