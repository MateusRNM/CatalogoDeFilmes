import { Injectable, Logger } from "@nestjs/common";
import { ListGenreRepository } from "../repository";

@Injectable()
export class ListGenreUseCase {
    constructor(private readonly genreRepository: ListGenreRepository, private readonly logger: Logger) {}

    async execute() {
        try {
            const genre = await this.genreRepository.list();
            return genre;
        } catch(error) {
            this.logger.error(error);
            throw error;
        }
    }
}