import { Controller, Get, Post,Body, Patch, Param,Delete,Req,UseGuards, UseFilters, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, RegisterResponseDto } from './dto/create-user.dto';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { UserDto, UserDetailsResponseDto } from './dto/accounts.dto';
import { Users } from './entities/user.entity';
import { LoginResponseDTO, LoginUserDTO } from './dto/login-user.dto';
import { ForgetPasswordDTO, ForgetPasswordResponseDto } from './dto/forget-password.dto';
import { ResetPasswordRequestDTO, ResetPasswordResponseDTO } from './dto/reset-password.dto';
import { AuthGuard } from '@nestjs/passport';
import { ExceptionFilter } from './rpc-exception.filter';

@Controller('users')
//@UseFilters(ExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  private readonly logger = new Logger(UsersController.name)

  @GrpcMethod('CommonService', 'find')
  findAll(userRes: UserDto): Promise<UserDetailsResponseDto> {
    this.logger.log('Inside gRPC Method - find');
    const res = this.usersService.findAll();
    return res;
  }
  
  @GrpcMethod('CommonService', 'register')
  register(createUserDto : CreateUserDto): Promise<RegisterResponseDto> {
    this.logger.log('Inside gRPC Method - register');
    const res = this.usersService.registerUser(createUserDto);
    return res;
  }

  @GrpcMethod('CommonService', 'login')
  login(loginUserDto : LoginUserDTO) : Promise<LoginResponseDTO> {
    this.logger.log('Inside gRPC Method - login');
    return this.usersService.loginUser(loginUserDto);
  }

  @GrpcMethod('CommonService', 'forgetpassword')
  forgetpassword(forgetPasswordDTO : ForgetPasswordDTO) : Promise<ForgetPasswordResponseDto> {
    this.logger.log('Inside gRPC Method - forgetpassword');
    return this.usersService.forgetpassword(forgetPasswordDTO);
  }

  @GrpcMethod('CommonService', 'resetpassword')
  resetpassword(resetPasswordRequestDTO:ResetPasswordRequestDTO) : Promise<ResetPasswordResponseDTO> {
    this.logger.log('Inside gRPC Method - resetpassword');
    return this.usersService.resetpassword(resetPasswordRequestDTO);
  }

  // @GrpcMethod('CommonService', 'fetchdetails')
  //@UseGuards(AuthGuard('jwt'))
  // async fetchUserDetails(@Req() req) : Promise<Users>{
  //     console.log("inside user controller");
  //     const user  = req.user;
  //     delete user.password;
  //     return user;
  // }
}
