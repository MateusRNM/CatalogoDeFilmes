import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import {
  CreateGenreUseCase,
  FindOneGenreUseCase,
  ListGenreUseCase,
  RemoveGenreUseCase,
  UpdateGenreUseCase,
} from './use-cases';

@Injectable()
export class GenreService {
  constructor(
    private readonly createGenreUseCase: CreateGenreUseCase,
    private readonly listGenreUseCase: ListGenreUseCase,
    private readonly findOneGenreUseCase: FindOneGenreUseCase,
    private readonly updateGenreUseCase: UpdateGenreUseCase,
    private readonly removeGenreUseCase: RemoveGenreUseCase,
  ) {}

  create(createGenreDto: CreateGenreDto) {
    return this.createGenreUseCase.execute(createGenreDto);
  }

  findAll() {
    return this.listGenreUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneGenreUseCase.execute(id);
  }

  update(id: string, updateGenreDto: UpdateGenreDto) {
    return this.updateGenreUseCase.execute(id, updateGenreDto);
  }

  remove(id: string) {
    return this.removeGenreUseCase.execute(id);
  }
}
