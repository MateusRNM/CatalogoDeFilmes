import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class ListGenreRepository {
    constructor(private readonly prisma : PrismaService) {}

    async list() {
        const genre = await this.prisma.genre.findMany();
        return genre;
    }
}   