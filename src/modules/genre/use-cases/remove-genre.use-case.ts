import { Injectable, Logger } from '@nestjs/common';
import { RemoveGenreRepository } from '../repository';

@Injectable()
export class RemoveGenreUseCase {
  constructor(
    private readonly logger: Logger,
    private readonly removeGenreRepository: RemoveGenreRepository,
  ) {}

  async execute(id: string) {
    try {
      const genre = await this.removeGenreRepository.remove(id);
      return genre;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
