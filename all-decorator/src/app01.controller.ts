import { Controller, Get, HostParam, Request as 请求 } from '@nestjs/common';
// import { Req } from '@nestjs/common'
import { Request } from 'express';

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
}
