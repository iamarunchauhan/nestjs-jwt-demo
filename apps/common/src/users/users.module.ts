import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database.module';
import { UsersRepository } from './users.repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { usersProviders } from './users.provider';
import { MailModule } from './mail.module';

@Module({
  imports: [DatabaseModule,
    MailModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy : 'jwt'}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(configService : ConfigService) => ({
        secret : configService.get('JWT_SECRET'),
        signOptions : {
          expiresIn: 3600,
        }
      }),
    }),
  ],
  controllers: [UsersController],
  providers: [...usersProviders, ConfigService, UsersService, JwtStrategy, UsersRepository],
  exports : [JwtStrategy,PassportModule]
})
export class UsersModule {}
