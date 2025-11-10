import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {
  CreateMovieUseCase,
  FavoriteMovieUseCase,
  FindOneMovieUseCase,
  ListFavoriteMovieUseCase,
  ListMovieUseCase,
  RemoveMovieUseCase,
  UpdateMovieUseCase,
} from './use-cases';

@Injectable()
export class MovieService {
  constructor(
    private readonly createMovieUseCase: CreateMovieUseCase,
    private readonly listMovieUseCase: ListMovieUseCase,
    private readonly findOneMovieUseCase: FindOneMovieUseCase,
    private readonly updateMovieUseCase: UpdateMovieUseCase,
    private readonly removeMovieUseCase: RemoveMovieUseCase,
    private readonly favoriteMovieUseCase: FavoriteMovieUseCase,
    private readonly listFavoriteMovieUseCase: ListFavoriteMovieUseCase,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.createMovieUseCase.execute(createMovieDto);
  }

  findAll() {
    return this.listMovieUseCase.execute();
  }

  findOne(id: string) {
    return this.findOneMovieUseCase.execute(id);
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.updateMovieUseCase.execute(id, updateMovieDto);
  }

  remove(id: string) {
    return this.removeMovieUseCase.execute(id);
  }

  favorite(id: string, favorite: boolean) {
    return this.favoriteMovieUseCase.execute(id, favorite);
  }

  listFavorite() {
    return this.listFavoriteMovieUseCase.execute();
  }
}
