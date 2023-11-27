import { Injectable } from '@nestjs/common';
import { Post, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { JwtService } from '@nestjs/jwt';
import { PasswordHashService } from '../../common/encryption/password-hash';
import { LoginRepository } from './repositories/login.repository';

@Injectable()
export class LoginService {
  constructor(
    private readonly repository: LoginRepository,
    private readonly passwordHashService: PasswordHashService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  async create(createLoginDto: CreateLoginDto): Promise<string> {
    const user = await this.repository.verifyExisteField(createLoginDto.email);

    if (
      !user ||
      !(await this.passwordHashService.comparePasswords(
        createLoginDto.password,
        user.password,
      ))
    ) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { id: user.id, name: user.name, type: user.type };
    const token = this.jwtService.sign(payload);

    return JSON.stringify(token);
  }
}
