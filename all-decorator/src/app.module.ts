import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Sharp } from './sharp';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Sharp],
})
export class AppModule {}
