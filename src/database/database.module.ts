import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from 'src/modules/films/entities/film.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'senha123',
  database: 'mksdb',
  entities: [User, Film],
  synchronize: false,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...dataSourceOptions,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
