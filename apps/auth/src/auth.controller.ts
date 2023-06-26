import { Controller, Get, Post, Body, Req, Query, Logger, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDTO, RegisterResponseDto } from './dto/create-user.dto';
import { ForgetPasswordDTO, ForgetPasswordResponseDto } from './dto/forget-password.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
import { ResetPasswordRequestDTO, ResetPasswordResponseDTO } from './dto/reset-password.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService,) {}

  private readonly logger = new Logger(AuthController.name);

  @Get()
  getHello(): Promise<any> {
    return this.authService.find();
  }

  @Post('/register')
  register(@Body() createUserDto : CreateUserDTO): Promise<RegisterResponseDto> {
    this.logger.log('Inside register Endpoint');
    return this.authService.register(createUserDto);
  }

  @Post('/login')
  login(@Body() loginUserDto : LoginUserDTO): Promise<LoginResponseDto> {
    this.logger.log('Inside login endpoint');
    return this.authService.login(loginUserDto);
  }

  @Post('/logout')
  logout(@Body() loginUserDto : LoginUserDTO): String {
    this.logger.log('Inside logout Endpoint');
    this.logger.log(loginUserDto);
    return "Working";
  }

  @Post('/forgetpassword')
  forgetpassword(@Body() forgetPasswordDTO : ForgetPasswordDTO): Promise<ForgetPasswordResponseDto> {
    this.logger.log('Inside forgetpassword endpoint');
    return this.authService.forgetpassword(forgetPasswordDTO);
  }

  @Post('/resetpassword')
  resetpassword(@Body() resetPasswordRequestDTO :ResetPasswordRequestDTO): Promise<ResetPasswordResponseDTO> {
    this.logger.log('Inside resetpassword endpoint');
    return this.authService.resetpassword(resetPasswordRequestDTO);
  }

  @Post('/fetchdetails')
  //@UseGuards(AuthGuard('jwt'))
  fetchdetails(@Req() req : any): Promise<any> {
    this.logger.log('Inside fetchdetails endpoint');
    console.log(req);
    return null;
    //return this.authService.fetchdetails(req);
  }
}