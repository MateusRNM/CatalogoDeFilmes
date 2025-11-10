import { Injectable, Logger } from "@nestjs/common";
import { CreateGenreRepository } from "../repository";
import { CreateGenreDto } from "../dto/create-genre.dto";

@Injectable()
export class CreateGenreUseCase {
    constructor(private readonly genreRepository: CreateGenreRepository, private readonly logger: Logger) {}

    async execute(data: CreateGenreDto) {
        try {
            const genre = await this.genreRepository.create(data);
            return genre;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}