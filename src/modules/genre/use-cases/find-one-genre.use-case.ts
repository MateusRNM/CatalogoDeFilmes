import { Injectable, Logger } from '@nestjs/common';
import { FindOneGenreRepository } from '../repository';

@Injectable()
export class FindOneGenreUseCase {
  constructor(
    private readonly genreRepository: FindOneGenreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const genre = await this.genreRepository.findOne(id);
      return genre;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
