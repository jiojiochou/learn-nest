import { Injectable } from '@nestjs/common';

// 申明provide
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
