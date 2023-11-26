import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from '../entities/login.entity';

@Injectable()
export class LoginRepository {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}
  async verifyExisteField(email: string) {
    return this.loginRepository.findOne({
      where: {
        email,
      },
    });
  }
}
