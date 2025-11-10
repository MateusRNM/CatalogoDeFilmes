import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class UpdateMovieRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, dto: UpdateMovieDto) {
    const movie = await this.prisma.movie.update({
      data: dto,
      where: {
        id,
      },
    });
    return movie;
  }
}
