import { Injectable, Logger } from '@nestjs/common';
import { CreateMovieRepository } from '../repository';
import { CreateMovieDto } from '../dto/create-movie.dto';

@Injectable()
export class CreateMovieUseCase {
  constructor(
    private readonly movieRepository: CreateMovieRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateMovieDto) {
    try {
      const movie = await this.movieRepository.create(data);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
