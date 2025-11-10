import { Injectable, Logger } from '@nestjs/common';
import { FavoriteMovieRepository } from '../repository';

@Injectable()
export class FavoriteMovieUseCase {
  constructor(
    private readonly logger: Logger,
    private readonly movieRepository: FavoriteMovieRepository,
  ) {}

  async execute(id: string, favorite: boolean) {
    try {
      const movie = await this.movieRepository.favorite(id, favorite);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
