import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateLoginDto {
  @ApiProperty({
    example: 'Email',
    description: 'cecilia_santos@gmail.com',
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
}
