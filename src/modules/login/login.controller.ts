import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiResponse({ status: 200 })
  @ApiResponse({
    status: 401,
    description: 'Invalid email or password',
  })
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }
}
