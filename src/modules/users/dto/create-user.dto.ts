import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Cecília Stefany Fátima Santos',
    description: 'Nome completo',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'cecilia_santos@gmail.com',
    description: 'Email',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'SbYAPHdPzH',
    description: 'Senha',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: 'adm',
    description: 'Esse campo define o tipo de usuário que pode ser adm ou user',
  })
  @IsNotEmpty()
  @IsString()
  type: string;
}
