import { Repository } from 'typeorm';
import { Accounts } from './entities/account.entity';
import { ResponseDto } from './dto/accounts.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
import { Users } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private accountsRepository;
    private usersRepository;
    private jwtService;
    constructor(accountsRepository: Repository<Accounts>, usersRepository: UsersRepository, jwtService: JwtService);
    findAll(): Promise<ResponseDto>;
    register(createUserDTO: any): Promise<Users>;
    loginUser(loginUserDto: LoginUserDTO): Promise<LoginResponseDto>;
}
