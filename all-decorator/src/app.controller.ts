import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Sharp } from './sharp';

// 申明controller
@Controller('api')
export class AppController {
  // 构造器注入
  // constructor(private readonly appService: AppService) {}

  // 属性注入
  @Inject(AppService)
  private readonly appService: AppService;

  // provide可以是任何class
  @Inject(Sharp)
  private readonly sharp: Sharp;

  @Get()
  getHello(): string {
    console.log(this.sharp.zai());
    return this.appService.getHello();
  }
}
