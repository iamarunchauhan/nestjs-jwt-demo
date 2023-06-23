import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, RegisterResponseDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Accounts } from './entities/account.entity';
import { AccountDto, ResponseDto } from './dto/accounts.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
import { CreateNewUserDTO } from './dto/create-newuser.dto';
import { Users } from './entities/user.entity';
import { JwtPayload } from './jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountsRepository: Repository<Accounts>,

    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService
  ) {}

  async findAll(): Promise<ResponseDto> {
    try {
      const res = await this.accountsRepository.find();
      console.log(res);
      return { accounts: res };
    } catch (e) {
      console.log(e);
    }
  }

  async register(createUserDTO): Promise<Users> {
    try {
      return await this.usersRepository.register(createUserDTO);
    } catch (e) {
      console.log(e);
    }
  }

  async loginUser(loginUserDto : LoginUserDTO) : Promise<Users>{
    const { email, password } = loginUserDto;
    console.log(loginUserDto);
    const user = await this.usersRepository.findOne({ where : { email: email }  });
    console.log(user);

    if (!user) {
      throw new NotFoundException('User details not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload : JwtPayload = { email };
    const accessToken : string = await this.jwtService.sign(payload);
    //return { accessToken } ;
    return user;
  }
}
