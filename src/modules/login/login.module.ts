import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LoginRepository } from './repositories/login.repository';
import { JwtConfigModule } from '../auth/jwt-config.module';
import { PasswordHashService } from 'src/common/encryption/password-hash';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtConfigModule],
  controllers: [LoginController],
  providers: [LoginService, LoginRepository, PasswordHashService],
})
export class LoginModule {}
