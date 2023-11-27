import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('films')
@ApiBearerAuth('access-token')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200 })
  @ApiResponse({
    status: 401,
    description: 'You are not authorized to create a film',
  })
  @ApiResponse({
    status: 401,
    description: 'film already exists',
  })
  @Post()
  create(@Body() createFilmDto: CreateFilmDto, @Req() request) {
    return this.filmsService.create(createFilmDto, request);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 404,
    description: 'Film is not found',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200 })
  @ApiResponse({
    status: 401,
    description: 'You are not authorized to create a film',
  })
  @ApiResponse({
    status: 404,
    description: 'Film is not found',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFilmDto: UpdateFilmDto,
    @Req() request,
  ) {
    return this.filmsService.update(+id, updateFilmDto, request);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 204 })
  @ApiResponse({
    status: 401,
    description: 'You are not authorized to create a film',
  })
  @ApiResponse({
    status: 404,
    description: 'Film is not found',
  })
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() request) {
    return this.filmsService.remove(+id, request);
  }
}
