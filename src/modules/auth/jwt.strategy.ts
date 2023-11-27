import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from '../../modules/login/entities/login.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'process.env.JWT_KEY',
    });
  }

  async validate(payload: any) {
    console.log(payload);
    const user = await this.loginRepository.findOne({
      where: { email: payload.email },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
