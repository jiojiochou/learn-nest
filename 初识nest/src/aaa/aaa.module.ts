import { Global, Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

import { LogMiddleware } from 'src/log.middleware';

@Global() // 每个模块(@Module)imports太麻烦, 直接声明为全局模块(@Module)
@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('api/aaa*');
  }
}
