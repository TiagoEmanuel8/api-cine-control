import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFilmDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  image_url: string;

  @IsNotEmpty()
  @IsString()
  sinopse: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  release_date: string;

  @IsNotEmpty()
  @IsNumber()
  stars: string;

  @IsString()
  trailer_url: string;
}
