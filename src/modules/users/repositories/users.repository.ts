import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user-response.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private mapUserToDto(user: any): any {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const newUser = await this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(newUser);
    return this.mapUserToDto(savedUser);
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return users.map(this.mapUserToDto);
  }

  async findOne(id: number): Promise<UserDto> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) return null;
    return this.mapUserToDto(user);
  }

  async verifyExisteField(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async update(id: number, updatePositionDto: UpdateUserDto): Promise<UserDto> {
    const updatedUser = await this.userRepository.preload({
      id,
      ...updatePositionDto,
    });
    await this.userRepository.save(updatedUser);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
