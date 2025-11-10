import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class FindOneGenreRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const genre = await this.prisma.genre.findUnique({
      where: {
        id,
      },
    });
    return genre;
  }
}
