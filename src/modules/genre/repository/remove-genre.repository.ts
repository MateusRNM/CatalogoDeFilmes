import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class RemoveGenreRepository {
  constructor(private readonly prisma: PrismaService) {}

  async remove(id: string) {
    const genre = await this.prisma.genre.delete({
      where: {
        id,
      },
    });
    return genre;
  }
}
