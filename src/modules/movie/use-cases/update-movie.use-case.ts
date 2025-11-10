import { Injectable, Logger } from '@nestjs/common';
import { UpdateMovieRepository } from '../repository';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class UpdateMovieUseCase {
  constructor(
    private readonly logger: Logger,
    private readonly updateMovieRepository: UpdateMovieRepository,
  ) {}

  async execute(id: string, dto: UpdateMovieDto) {
    try {
      const movie = await this.updateMovieRepository.update(id, dto);
      return movie;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
