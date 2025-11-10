import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class RemoveMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async remove(id: string) {
    const movie = await this.prisma.movie.delete({
      where: {
        id,
      },
    });
    return movie;
  }
}
