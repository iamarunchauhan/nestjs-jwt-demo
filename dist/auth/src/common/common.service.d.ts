import { ClientGrpc } from '@nestjs/microservices';
import { CreateUserDTO } from '../dto/create-user.dto';
import { LoginUserDTO } from '../dto/login-user.dto';
export declare class CommonService {
    private commonClient;
    private commonGrpcService;
    constructor(commonClient: ClientGrpc);
    onModuleInit(): void;
    find(): Promise<any>;
    register(createUserDto: CreateUserDTO): Promise<import("../entities/user.entity").Users>;
    login(loginUserDto: LoginUserDTO): Promise<import("../dto/login-user.dto").LoginResponseDto>;
}
