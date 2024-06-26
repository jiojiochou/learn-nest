import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('customParams-decorator')
  params(@Ccc() c) {
    // 参数装饰器的返回值就是 参数c的值
    return c;
  }

  @Bbb('merge-decorator', 'admin')
  merge() {
    return this.appService.guard();
  }

  @Get('guard')
  @Aaa('admin', 'common')
  @UseGuards(AaaGuard)
  guard() {
    return this.appService.guard();
  }

  @Get()
  @SetMetadata('slogan', ['唱', '跳', 'rap', '篮球'])
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
