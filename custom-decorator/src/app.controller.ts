import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/guard')
  @UseGuards(AaaGuard)
  guard() {
    this.appService.guard();
  }

  @Get()
  @SetMetadata('slogan', ['唱', '跳', 'rap', '篮球'])
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
