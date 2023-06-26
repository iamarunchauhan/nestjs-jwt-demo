import { HttpException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, RegisterResponseDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { UserDetailsResponseDto } from './dto/accounts.dto';
import { LoginResponseDTO, LoginUserDTO } from './dto/login-user.dto';
import { Users } from './entities/user.entity';
import { JwtPayload } from './jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';
import { ForgetPasswordDTO, ForgetPasswordResponseDto } from './dto/forget-password.dto';
import nodemailer from 'nodemailer';
import { MailService } from './mail.service';
import { ResetPasswordResponseDTO } from './dto/reset-password.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(

    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
    private readonly mailService : MailService
  ) {}

  async findAll(): Promise<UserDetailsResponseDto> {
    try {
      const res = await this.usersRepository.find();
      console.log(res);
      return { users : res };
    } catch (e) {
      console.log(e);
    }
  }

  async registerUser(createUserDTO): Promise<RegisterResponseDto> {
    try {
      //throw new HttpException('theow error', 403);
      return await this.usersRepository.registerUser(createUserDTO);
    } catch (e) {
      console.log(e);
      //throw new RpcException('exception thrown');
    }
  }

  async loginUser(loginUserDto : LoginUserDTO) : Promise<LoginResponseDTO>{
    const { email, password } = loginUserDto;
    console.log(loginUserDto);
    const user = await this.usersRepository.findOne({ where : { email : email } } );
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
    const loginResponseDTO : LoginResponseDTO = { accessToken : accessToken} ;
    return loginResponseDTO;
  }

  async forgetpassword(forgetPasswordDTO : ForgetPasswordDTO) : Promise<ForgetPasswordResponseDto>{
    const { email } = forgetPasswordDTO;
    console.log(forgetPasswordDTO);
    const user = await this.usersRepository.findOne({ where : { email : email } } );
    console.log(user);

    if (!user) {
      throw new NotFoundException('User details not found');
    }

    const payload : JwtPayload = { email };
    const forgetPasswordToken : string = await this.jwtService.sign(payload);
    
    console.log(forgetPasswordToken);
    console.log(new Date());

    var today = new Date();
    today.setHours(today.getHours() + 1);

    await this.usersRepository.update({id:user.id} , {
      forgetpasswordtoken : forgetPasswordToken,
      tokencreateddate: today
    });

    const forgetPasswordTokenString = `Please find your forget password token : ${forgetPasswordToken}`;
    await this.mailService.sendEmail(email, 'Forget Password Token',
    forgetPasswordTokenString);

    const forgetPasswordResponseDTO : ForgetPasswordResponseDto = { forgetPasswordToken : forgetPasswordToken} ;
    return forgetPasswordResponseDTO;
  }

  async resetpassword(resetPasswordRequestDTO) : Promise<ResetPasswordResponseDTO>{
    console.log("Reset password user service") ;
    const { token, newPassword } =  resetPasswordRequestDTO;
    console.log(token);
    console.log(newPassword);    

    const user = await this.usersRepository.findOne({ where : { forgetpasswordtoken : token } } );
    console.log(user);

    if (!user) {
        throw new NotFoundException('User details not found');
    }
    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    this.usersRepository.update({id : user.id} , {
      password : hashedPassword,
      forgetpasswordtoken : ""
    });

    const resetPasswordResponseDTO : ResetPasswordResponseDTO = 
    { passwordChanged : "Password changed successfully " };
    return resetPasswordResponseDTO;
}
}
