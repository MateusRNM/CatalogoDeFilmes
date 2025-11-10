import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class FindOneMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const movie = await this.prisma.movie.findUnique({
      where: {
        id,
      },
      include: {
        genre: true,
      },
    });
    return movie;
  }
}
