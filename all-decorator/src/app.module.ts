import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Sharp } from './sharp';
import { AaaModule } from './aaa/aaa.module';

@Module({
  imports: [AaaModule],
  controllers: [AppController],
  providers: [
    AppService,
    Sharp,
    // 使用 useFactory 声明 provide
    {
      provide: 'Severe',
      useFactory() {
        return {
          name: 'qWer',
        };
      },
    },
  ],
})
export class AppModule {}
