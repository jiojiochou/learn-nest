import { Controller, Get, Next, Query, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello1')
  // 有@Next() 和 @Response() Nest认为你自己会返回响应或者调用下个handler，就不会处理返回值了
  // 依然想让Nest把函数返回值作为响应 需要加上 @Response({ passthrough: true })
  getHello1(@Next() nest, @Response({ passthrough: true }) rep): string {
    console.log('hello1');
    return this.appService.getHello();
  }

  @Get('hello2')
  getHello2(): string {
    console.log('hello2');
    return this.appService.getHello();
  }

  @Get('world1')
  world1(): string {
    console.log('world1');
    return this.appService.getHello();
  }

  @Get('world2')
  world2(): string {
    console.log('world2');
    return this.appService.getHello();
  }

  @Get('next')
  next1(@Next() next) {
    next();
    return 'next1';
  }

  @Get('next')
  next2(): string {
    return 'next2';
  }
}
