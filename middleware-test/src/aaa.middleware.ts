import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Injectable()
export class AaaMiddleware implements NestMiddleware {
  @Inject(AppService)
  private readonly appSerivce: AppService;

  use(req: Request, res: Response, next: () => void) {
    console.log('before');
    console.log('@@@@@@@@@@@@@', this.appSerivce.getHello());
    next();
    console.log('after');
  }
}
