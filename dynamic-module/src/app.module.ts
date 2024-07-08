import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  imports: [
    AaaModule.register({
      aaa: 123,
      bbb: 456,
    }),
    CccModule.register({
      aaa: 100,
      bbb: 200,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'less',
      useFactory() {
        return {
          name: 'zs',
          age: 18,
        };
      },
    },
    {
      provide: 'price',
      useValue: 100,
    },
  ],
})
export class AppModule {}
