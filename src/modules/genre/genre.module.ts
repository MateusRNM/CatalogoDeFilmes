import { Logger, Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { SharedModules } from 'src/shared/shared.module';
import * as UseCases from './use-cases';
import * as Repositories from './repository';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModules],
  controllers: [GenreController],
  providers: [GenreService, ...useCases, ...repositories, Logger],
})
export class GenreModule {}
