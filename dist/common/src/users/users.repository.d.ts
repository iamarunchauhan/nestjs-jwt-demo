import { Repository } from 'typeorm';
import { CreateNewUserDTO } from './dto/create-newuser.dto';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersRepository extends Repository<Users> {
    createUser(createUserDTO: CreateNewUserDTO): Promise<Users>;
    register(createUserDto: CreateUserDto): Promise<Users>;
}
