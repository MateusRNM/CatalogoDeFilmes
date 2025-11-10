import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { UpdateGenreDto } from '../dto/update-genre.dto';

@Injectable()
export class UpdateGenreRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, dto: UpdateGenreDto) {
    const genre = await this.prisma.genre.update({
      data: dto,
      where: {
        id,
      },
    });
    return genre;
  }
}
