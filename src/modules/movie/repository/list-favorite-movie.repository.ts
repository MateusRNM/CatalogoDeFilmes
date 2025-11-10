import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class ListFavoriteMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listFavorite() {
    const movie = await this.prisma.movie.findMany({
      include: {
        genre: true,
      },
      where: {
        isFavorite: true,
      },
    });
    return movie;
  }
}
