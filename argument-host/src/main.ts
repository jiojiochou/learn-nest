import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AaaFilter } from './aaa.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局级别的异常捕获
  app.useGlobalFilters(new AaaFilter());

  await app.listen(9527);
}
bootstrap();
