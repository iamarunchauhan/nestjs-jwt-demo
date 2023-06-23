import { Controller, Get, Post,Body, Patch, Param,Delete,Req,UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, RegisterResponseDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GrpcMethod } from '@nestjs/microservices';
import { ResponseDto, UserDto, AccountDto } from './dto/accounts.dto';
import { Users } from './entities/user.entity';
import { CreateNewUserDTO } from './dto/create-newuser.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('CommonService', 'find')
  findAll(userRes: UserDto): Promise<ResponseDto> {
    const res = this.usersService.findAll();
    return res;
  }

  @GrpcMethod('CommonService', 'register')
  register(createUserDto : CreateUserDto): Promise<Users> {
    const res = this.usersService.register(createUserDto);
    return res;
  }

  @GrpcMethod('CommonService', 'login')
  login(loginUserDto : LoginUserDTO) : Promise<Users> {
    console.log('inside user controller');
    return this.usersService.loginUser(loginUserDto);
  }

  // @Post('fetchdetails') 
  // @UseGuards(AuthGuard())
  // async fetchUserDetails(@Req() req) : Promise<Users>{
  //     const user  = req.user;
  //     delete user.password;
  //     return user;
  // }
}
