import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { accountProviders } from './accounts.provider';
import { DatabaseModule } from '../database.module';
import { UsersRepository } from './users.repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [DatabaseModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy : 'jwt'}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(configService : ConfigService) => ({
        secret : 'abcd',
        signOptions : {
          expiresIn: 3600,
        }
      }),
    }),
    //TypeOrmModule.forFeature([UsersRepository])
  ],
  controllers: [UsersController],
  providers: [...accountProviders, UsersService, UsersRepository, JwtStrategy, JwtService],
  exports : [JwtStrategy,PassportModule]
})
export class UsersModule {}
