import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Filmes')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um filme.' })
  @ApiBody({ type: CreateMovieDto })
  @ApiCreatedResponse({ description: 'Filme criado com sucesso.' })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os filmes.' })
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista um filme.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do filme.',
  })
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um filme.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do filme.',
  })
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um filme.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do filme.',
  })
  remove(@Param('id') id: string) {
    return this.movieService.remove(id);
  }
}
