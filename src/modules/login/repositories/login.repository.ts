import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginRepository {
  constructor(
    @InjectRepository(User)
    private readonly loginRepository: Repository<User>,
  ) {}

  async verifyExisteField(email: string): Promise<User> {
    return this.loginRepository.findOne({
      where: {
        email,
      },
    });
  }
}
