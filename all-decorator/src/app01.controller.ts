import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class App01Controller {
  @Get()
  hello1() {
    return 'hello app01.controller /';
  }
  @Get('bbb')
  // 通过@HostParam('host') 把 host里的参数取出来
  hello2(@HostParam('host') host) {
    console.log('host: ', host);
    return 'hello app01.controller /bbb' + host;
  }
}
