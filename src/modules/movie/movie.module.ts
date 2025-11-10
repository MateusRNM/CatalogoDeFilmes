import { Logger, Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { SharedModules } from 'src/shared/shared.module';
import * as UseCases from './use-cases';
import * as Repositories from './repository';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModules],
  controllers: [MovieController],
  providers: [MovieService, ...useCases, ...repositories, Logger],
})
export class MovieModule {}
