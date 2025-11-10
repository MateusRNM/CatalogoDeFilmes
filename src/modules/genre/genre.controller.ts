import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Gênero')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um gênero.' })
  @ApiBody({ type: CreateGenreDto })
  @ApiCreatedResponse({ description: 'Gênero criado com sucesso.' })
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os gêneros.' })
  findAll() {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um gênero.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do gênero.',
  })
  findOne(@Param('id') id: string) {
    return this.genreService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um gênero.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do gênero.',
  })
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genreService.update(id, updateGenreDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um gênero.' })
  @ApiParam({
    name: 'id',
    description: 'Identificador do gênero.',
  })
  remove(@Param('id') id: string) {
    return this.genreService.remove(id);
  }
}
