import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CommonService } from './common/common.service';
import { CreateUserDTO, RegisterResponseDto } from './dto/create-user.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly commonService: CommonService) {}

  async find(): Promise<any> {
    try {
      const result = await this.commonService.find();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async register(createUserDto : CreateUserDTO): Promise<Users> {
    try {
      const result = await this.commonService.register(createUserDto);
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async login(loginUserDto : LoginUserDTO): Promise<LoginResponseDto> {
    try {
      console.log("Inside Auth Service");
      const result = await this.commonService.login(loginUserDto);
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}