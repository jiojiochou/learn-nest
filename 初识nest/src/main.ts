import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

// import type { NextFunction, Request, Response } from 'express';

// guard
// import { LoginGuard } from './login.guard';

// interceptor
// import { TimeInterceptor } from './time.interceptor';

// pipe
// import { ValidatePipe } from './validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 全局中间件 global-middleware
  // app.use(function (req: Request, res: Response, next: NextFunction) {
  //   console.log('before: ', req.url);
  //   next();
  //   console.log('after');
  // });

  // 全局守卫 (guard)
  // app.useGlobalGuards(new LoginGuard());

  // 全局拦截器 interceptor
  // app.useGlobalInterceptors(new TimeInterceptor());

  // 全局管道 pipe
  // app.useGlobalPipes(new ValidatePipe());

  // 设置静态资源目录
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' });

  await app.listen(9527);

  // setTimeout(() => {
  //   app.close();
  // }, 10000);
}
bootstrap();
