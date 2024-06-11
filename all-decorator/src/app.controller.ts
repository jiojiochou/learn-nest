import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';
import { Sharp } from './sharp';

// 申明controller
@Controller('api')
export class AppController {
  // 构造器注入
  // constructor(@Optional() private readonly appService: AppService) {}

  // 属性注入
  @Inject(AppService)
  private readonly appService: AppService;

  // 属性注入 provide 可以是任何class
  @Inject(Sharp)
  private readonly sharp: Sharp;

  // 属性注入 useFactory
  @Inject('Severe')
  private readonly severe: { name: string };

  // 可选的, 如果没有注入依赖, 创建对象时报错, 使用 @Optional 这样没有对应的provide也能正常创建对象
  @Optional()
  // 属性注入
  @Inject('Serious')
  private readonly serious: { slogan: string; hobby: string[] };

  @Get()
  getHello(): string {
    console.log('sharp: ', this.sharp.zai());
    console.log('severe: ', this.severe);
    console.log('Serious: ', this.serious);
    return this.appService.getHello();
  }
}
