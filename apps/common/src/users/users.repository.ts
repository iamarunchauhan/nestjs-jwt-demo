import { Repository, EntityRepository } from 'typeorm';
import { CreateNewUserDTO } from './dto/create-newuser.dto';
import { ConflictException, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from './dto/login-user.dto';
import { Users } from './entities/user.entity';
import { CreateUserDto, RegisterResponseDto } from './dto/create-user.dto';

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {

    public async createUser(createUserDTO: CreateNewUserDTO,): Promise<Users> {
        const { name, email, password, city } = createUserDTO;

        const user = new Users();
        user.name = name;
        user.email = email;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);
        user.password = hashedPassword;
        user.city = city;

        try {
            await user.save();
            delete user.password;
            return user;
        } catch (error) {
            if(error.code === '23505'){ //for duplicate email ID
                throw new ConflictException('Email ID already exists!');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    public async register(createUserDto: CreateUserDto): Promise<Users> {
        const { name, email, password, city } = createUserDto;

        const user = new Users();
        user.name = name;
        user.email = email;
        user.city = city;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
    
        try {
            await user.save();
            delete user.password;
            //return { success : true };
            return user;
        } catch (error) {
            if(error.code === '23505'){ //for duplicate email ID
                throw new ConflictException('Email ID already exists!');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    // async loginUser(loginUserDto : LoginUserDTO) : Promise<Users> {
    //     const { email, password } = loginUserDto;
    //     const user = await this.findOne({ email });

    //     if (!user) {
    //         throw new NotFoundException('User details not found');
    //     }

    //     const isPasswordValid = await bcrypt.compare(password, user.password);
    //     if (!isPasswordValid) {
    //         throw new UnauthorizedException('Invalid credentials');
    //     }

    //     this.jwtService.sign();

    //     delete user.password;
    //     return user;
    // }
}