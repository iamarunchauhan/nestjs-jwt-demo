import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, RegisterResponseDto } from './dto/create-user.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
import { Users } from './entities/user.entity';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): Promise<any> {
    return this.authService.find();
  }

  @Post(':register')
  register(@Body() createUserDto : CreateUserDTO): Promise<Users> {
    return this.authService.register(createUserDto);
  }

  @Post(':login')
  login(@Body() loginUserDto : LoginUserDTO): Promise<LoginResponseDto> {
    console.log("Inside Auth Controller");
    return this.authService.login(loginUserDto);
  }

  @Post(':logout')
  logout(@Body() loginUserDto : LoginUserDTO): String {
    console.log("Inside Auth Controller");
    console.log(loginUserDto);
    return "Working";
  }
}