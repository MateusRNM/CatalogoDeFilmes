import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Título do filme.',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do filme.',
  })
  description: string;

  @IsInt()
  @ApiProperty({
    description: 'Ano de lançamento do filme.',
  })
  releaseYear: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Identificador do gênero do filme.',
  })
  genreId: string;
}
