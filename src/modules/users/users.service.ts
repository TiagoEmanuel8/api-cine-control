import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/users.repository';
import { PasswordHashService } from '../../common/encryption/password-hash';

@Injectable()
export class UsersService {
  constructor(
    private readonly repository: UserRepository,
    private readonly passwordHashService: PasswordHashService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const verifyEmail = await this.repository.verifyExisteField(email);
    if (verifyEmail) throw new ConflictException('email already exists');

    const hashedPassword = await this.passwordHashService.hashPassword(
      password,
    );
    const userWithHashedPassword = {
      ...createUserDto,
      password: hashedPassword,
    };

    return await this.repository.create(userWithHashedPassword);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);
    if (!user) throw new NotFoundException(`User is not found`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.repository.findOne(id);
    if (!user) throw new NotFoundException(`User is not found`);
    return await this.repository.update(id, updateUserDto);
  }

  async remove(id: number) {
    const user = await this.repository.findOne(id);
    if (!user) throw new NotFoundException(`User ${id} is not found`);
    await this.repository.remove(id);
  }
}
