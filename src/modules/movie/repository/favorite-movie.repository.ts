import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class FavoriteMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async favorite(id: string, favorite: boolean) {
    const movie = await this.prisma.movie.update({
      where: {
        id,
      },
      data: {
        isFavorite: favorite,
      },
    });
    return movie;
  }
}
