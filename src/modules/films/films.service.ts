import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import Redis from 'ioredis';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmRepository } from './repositories/film.repository';
import { FilmDto } from './dto/user-response.dto';

@Injectable()
export class FilmsService {
  constructor(
    @Inject('REDIS_CLIENT') private readonly redisClient: Redis,
    private readonly repository: FilmRepository,
  ) {}

  async create(createFilmDto: CreateFilmDto, userReq: any) {
    if (userReq.type !== 'adm') {
      throw new UnauthorizedException(
        'You are not authorized to create a film',
      );
    }

    const { title } = createFilmDto;
    const verifyFilm = await this.repository.verifyExisteField(title);
    if (verifyFilm) throw new ConflictException('film already exists');

    return await this.repository.create(createFilmDto);
  }

  async findAll(): Promise<FilmDto[]> {
    const cacheKey = 'films_all';
    const cached = await this.redisClient.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }

    const films = await this.repository.findAll();
    await this.redisClient.set(cacheKey, JSON.stringify(films), 'EX', 3600);
    return films;
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);
    if (!user) throw new NotFoundException(`Film is not found`);
    return user;
  }

  async update(id: number, updateFilmDto: UpdateFilmDto, userReq: any) {
    if (userReq.type !== 'adm') {
      throw new UnauthorizedException(
        'You are not authorized to create a film',
      );
    }

    const film = await this.repository.findOne(id);
    if (!film) throw new NotFoundException(`Film is not found`);
    return await this.repository.update(id, updateFilmDto);
  }

  async remove(id: number, userReq: any) {
    if (userReq.type !== 'adm') {
      throw new UnauthorizedException(
        'You are not authorized to create a film',
      );
    }

    const user = await this.repository.findOne(id);
    if (!user) throw new NotFoundException(`Film ${id} is not found`);
    await this.repository.remove(id);
  }
}
