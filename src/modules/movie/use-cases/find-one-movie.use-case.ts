import { Injectable, Logger } from '@nestjs/common';
import { FindOneMovieRepository } from '../repository';

@Injectable()
export class FindOneMovieUseCase {
  constructor(
    private readonly movieRepository: FindOneMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const movie = await this.movieRepository.findOne(id);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
