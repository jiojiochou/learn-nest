import { Controller, Get } from '@nestjs/common';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class App01Controller {
  @Get()
  hello1() {
    return 'hello app01.controller /';
  }
  @Get('bbb')
  hello2() {
    return 'hello app01.controller /bbb';
  }
}
