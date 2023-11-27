import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { LoginModule } from './modules/login/login.module';
import { FilmsModule } from './modules/films/films.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    DatabaseModule,
    LoginModule,
    FilmsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
