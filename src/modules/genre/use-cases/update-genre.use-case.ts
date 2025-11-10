import { Injectable, Logger } from '@nestjs/common';
import { UpdateGenreRepository } from '../repository';
import { UpdateGenreDto } from '../dto/update-genre.dto';

@Injectable()
export class UpdateGenreUseCase {
  constructor(
    private readonly logger: Logger,
    private readonly updateGenreRepository: UpdateGenreRepository,
  ) {}

  async execute(id: string, dto: UpdateGenreDto) {
    try {
      const genre = await this.updateGenreRepository.update(id, dto);
      return genre;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
