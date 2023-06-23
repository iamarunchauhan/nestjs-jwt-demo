import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CommonGrpcServicesInterface } from './common.interface';
import { CreateUserDTO } from '../dto/create-user.dto';
import { LoginUserDTO } from '../dto/login-user.dto';

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
    const res = await this.commonGrpcService.find({ user: 'test' }).toPromise();
    return res;
  }

  async register(createUserDto : CreateUserDTO) {
    const res = await this.commonGrpcService.register(createUserDto).toPromise();
    return res;
  }

  async login(loginUserDto : LoginUserDTO) {
    console.log("Inside Common Service");
    const res = await this.commonGrpcService.login(loginUserDto).toPromise();
    return res;
  }
}