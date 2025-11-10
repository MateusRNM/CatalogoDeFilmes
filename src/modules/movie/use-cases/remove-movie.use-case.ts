import { Injectable, Logger } from '@nestjs/common';
import { RemoveMovieRepository } from '../repository';

@Injectable()
export class RemoveMovieUseCase {
  constructor(
    private readonly logger: Logger,
    private readonly removeMovieRepository: RemoveMovieRepository,
  ) {}

  async execute(id: string) {
    try {
      const movie = await this.removeMovieRepository.remove(id);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
