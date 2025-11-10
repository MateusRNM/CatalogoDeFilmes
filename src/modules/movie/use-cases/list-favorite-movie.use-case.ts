import { Injectable, Logger } from '@nestjs/common';
import { ListFavoriteMovieRepository } from '../repository';

@Injectable()
export class ListFavoriteMovieUseCase {
  constructor(
    private readonly movieRepository: ListFavoriteMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const movie = await this.movieRepository.listFavorite();
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
