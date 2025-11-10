import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreModule } from './modules/genre/genre.module';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [GenreModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
