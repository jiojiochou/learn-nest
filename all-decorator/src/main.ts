import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'session?',
      cookie: { maxAge: 100000 },
    }),
  );

  // 指定静态资源的路径
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // 指定模板的路径
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // 指定模板引擎为 handlerbars
  app.setViewEngine('hbs');

  await app.listen(9527);
}
bootstrap();
