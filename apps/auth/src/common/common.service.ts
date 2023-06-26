import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CommonGrpcServicesInterface } from './common.interface';
import { CreateUserDTO } from '../dto/create-user.dto';
import { LoginUserDTO } from '../dto/login-user.dto';
import { ForgetPasswordDTO } from '../dto/forget-password.dto';

@Injectable()
export class CommonService {
  private commonGrpcService: CommonGrpcServicesInterface;
  constructor(@Inject('common') private commonClient: ClientGrpc) {}

  onModuleInit() {
    console.log('init');
    this.commonGrpcService =
      this.commonClient.getService<CommonGrpcServicesInterface>('CommonService',);
  }

  async find() {
    const res = await this.commonGrpcService.find({ user: 'arunchauhan2319@gmail.com' }).toPromise();
    return res;
  }

  async register(createUserDto : CreateUserDTO) {
    const res = await this.commonGrpcService.register(createUserDto).toPromise();
    return res;
  }

  async login(loginUserDto : LoginUserDTO) {
    const res = await this.commonGrpcService.login(loginUserDto).toPromise();
    return res;
  }

  async forgetpassword(forgetPasswordDTO : ForgetPasswordDTO) {
    const res = await this.commonGrpcService.forgetpassword(forgetPasswordDTO).toPromise();
    return res;
  }

  async resetpassword(resetPasswordRequestDTO) {
    const res = await this.commonGrpcService.resetpassword(resetPasswordRequestDTO).toPromise();
    return res;
  }

  async fetchdetails(req) {
    const res = await this.commonGrpcService.fetchdetails(req).toPromise();
    return res;
  }
}