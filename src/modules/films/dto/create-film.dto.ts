import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFilmDto {
  @ApiProperty({
    example: 'O pianista',
    description: 'Nome do filme',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'https://images.justwatch.com/poster/244658635/s592/o-pianista',
    description: 'Url contendo a imagem do filme',
  })
  @IsString()
  image_url: string;

  @ApiProperty({
    example:
      'Um pianista judeu polonês vê Varsóvia mudar gradualmente à medida que a Segunda Guerra Mundial começa. Szpilman é forçado a ir para o Gueto de Varsóvia, mas depois é separado de sua família durante a Operação Reinhard. A partir deste momento até que os prisioneiros dos campos de concentração sejam liberados, Szpilman se esconde em vários locais entre as ruínas de Varsóvia.',
    description: 'Sinopse do filme',
  })
  @IsNotEmpty()
  @IsString()
  sinopse: string;

  @ApiProperty({
    example: '2023-07-03',
    description: 'Data de Lançamento do filme',
  })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  release_date: string;

  @ApiProperty({
    example: '4.6',
    description: 'Nota(IMDB) do filme',
  })
  @IsNotEmpty()
  @IsNumber()
  stars: string;

  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=K8DVwuXIx2E&ab_channel=SaraP',
    description: 'Url com trailer do filme',
  })
  @IsString()
  trailer_url: string;
}
