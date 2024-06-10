import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

// 申明controller
@Controller('api')
export class AppController {
  // 构造器注入
  // constructor(private readonly appService: AppService) {}

  // 属性注入
  @Inject(AppService)
  private readonly appService: AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
