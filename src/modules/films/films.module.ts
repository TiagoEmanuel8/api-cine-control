import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { FilmRepository } from './repositories/film.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  controllers: [FilmsController],
  providers: [FilmsService, FilmRepository],
})
export class FilmsModule {}
