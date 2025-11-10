import { Injectable, Logger } from '@nestjs/common';
import { ListMovieRepository } from '../repository';

@Injectable()
export class ListMovieUseCase {
  constructor(
    private readonly movieRepository: ListMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const movie = await this.movieRepository.list();
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
