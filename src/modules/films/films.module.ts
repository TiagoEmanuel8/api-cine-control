import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { FilmRepository } from './repositories/film.repository';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersModule } from '../users/users.module';
import { RedisModule } from '../cache/redis.module';

@Module({
  imports: [TypeOrmModule.forFeature([Film]), UsersModule, RedisModule],
  controllers: [FilmsController],
  providers: [FilmsService, FilmRepository, JwtAuthGuard],
})
export class FilmsModule {}
