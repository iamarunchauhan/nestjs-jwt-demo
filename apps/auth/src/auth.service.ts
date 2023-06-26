import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CommonService } from './common/common.service';
import { CreateUserDTO, RegisterResponseDto } from './dto/create-user.dto';
import { ForgetPasswordDTO, ForgetPasswordResponseDto } from './dto/forget-password.dto';
import { LoginResponseDto, LoginUserDTO } from './dto/login-user.dto';
import { ResetPasswordResponseDTO } from './dto/reset-password.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly commonService: CommonService) {}

  private readonly logger = new Logger(AuthService.name);

  async find(): Promise<any> {
    try {
      const result = await this.commonService.find();
      return result;
    } catch (e) {
      this.logger.error(e);
    }
  }

  async register(createUserDto : CreateUserDTO): Promise<RegisterResponseDto> {
    try {
      const result = await this.commonService.register(createUserDto);
      return result;
    } catch (e) {
      this.logger.error(e);
    }
  }

  async login(loginUserDto : LoginUserDTO): Promise<LoginResponseDto> {
    try {
      const result = await this.commonService.login(loginUserDto);
      return result;
    } catch (e) {
      this.logger.error(e);
    }
  }

  async forgetpassword(fogetPasswordDTO : ForgetPasswordDTO): Promise<ForgetPasswordResponseDto> {
    try {
      const result = await this.commonService.forgetpassword(fogetPasswordDTO);
      return result;
    } catch (e) {
      this.logger.error(e);
    }
  }

  async resetpassword(resetPasswordRequestDTO): Promise<ResetPasswordResponseDTO> {
    try {
      const result = await this.commonService.resetpassword(resetPasswordRequestDTO);
      return result;
    } catch (e) {
      this.logger.error(e);
    }
  }

  async fetchdetails(req): Promise<any> {
    try {
      const result = await this.commonService.fetchdetails(req);
      return result;
    } catch (e) {
      this.logger.error(e);
    }
  }
}