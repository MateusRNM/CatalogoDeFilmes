import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { CreateGenreUseCase, ListGenreUseCase } from './use-cases';

@Injectable()
export class GenreService {

  constructor(
    private readonly createGenreUseCase: CreateGenreUseCase,
    private readonly listGenreUseCase: ListGenreUseCase,
  ) {}
  
  create(createGenreDto: CreateGenreDto) {
    return this.createGenreUseCase.execute(createGenreDto);
  }

  findAll() {
    return this.listGenreUseCase.execute();
  }

  findOne(id: string) {
    return `This action returns a #${id} genre`;
  }

  update(id: string, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: string) {
    return `This action removes a #${id} genre`;
  }
}
