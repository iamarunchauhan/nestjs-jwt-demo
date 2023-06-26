import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CommonModule } from './common/common.module';
import { LoginUserDTO } from './dto/login-user.dto';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(authController.getHello()).toBe('Hello World!');
  //   });

  //   it('should return token"', () => {
  //     expect(authController.getHello()).toBe('Hello World!');
  //   });
  // });

  describe('/login', () => {
    it('should return token"', async () => {
      const loginUserDTO : LoginUserDTO = {
        email : "arunchauhan2319@gmail.com",
        password : "Arun@arun123"
      }

      const res = await authController.login(loginUserDTO);
      expect(res).toHaveProperty("accessToken");
    });
  })
});
