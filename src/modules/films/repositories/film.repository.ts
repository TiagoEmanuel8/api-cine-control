import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from '../entities/film.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmRepository {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
  ) {}

  async create(createFilmDto) {
    const newFilm = await this.filmRepository.create(createFilmDto);
    const savedFilm = await this.filmRepository.save(newFilm);
    return savedFilm;
  }

  async findAll() {
    const films = await this.filmRepository.find();
    return films;
  }

  async findOne(id: number) {
    const user = await this.filmRepository.findOne({
      where: { id },
    });
    if (!user) return null;
    return user;
  }

  async verifyExisteField(title: string) {
    return this.filmRepository.findOne({
      where: {
        title,
      },
    });
  }

  async update(id: number, updateFilmDto) {
    const updatedFilm = await this.filmRepository.preload({
      ...updateFilmDto,
      id,
    });

    await this.filmRepository.save(updatedFilm);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.filmRepository.delete(id);
  }
}
