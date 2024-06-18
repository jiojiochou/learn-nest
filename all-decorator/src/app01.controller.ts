import {
  Controller,
  Get,
  HostParam,
  Next,
  Response as 响应,
  Request as 请求,
} from '@nestjs/common';
// import { Req } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class App01Controller {
  @Get()
  hello1() {
    return 'hello app01.controller /';
  }
  @Get('HostParam')
  // 通过@HostParam('host') 把 host里的参数取出来
  hello2(@HostParam('host') host) {
    console.log('host: ', host);
    return {
      "HostParam('host')": host,
      slogan: `hello app01.controller /HostParam: ${host}`,
    };
  }

  @Get('req')
  // 通过@Req() 取出request对象
  // hello3(@Req() req: Request) {
  //   console.log('req: ', req.hostname);
  //   console.log('req: ', req.url);
  //   return 'hello app01.controller /ccc';
  // }
  // 通过@Request() 取出request对象
  hello3(@请求() req: Request) {
    return {
      hostname: req.hostname,
      url: req.url,
      slogan: 'hello app01.controller /req',
    };
  }

  @Get('res')
  // 通过 @Res()或者@Response() 取出response对象
  // res(@响应() res: Response) {
  //   // 不会再把handle返回值当成响应内容
  //   // return 'res';

  //   res.end('Response');
  // }
  res(@响应({ passthrough: true }) res: Response) {
    res;
    return 'res';
  }

  @Get('next')
  next1(@Next() next: NextFunction) {
    console.log('handler1');
    next();
    return '111';
  }

  @Get('next')
  next2() {
    console.log('handler2');
    return 'eee';
  }
}
