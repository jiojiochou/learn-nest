import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Inject,
  Optional,
  UseFilters,
  Body,
  SetMetadata,
  UseGuards,
  Headers,
  Ip,
  Session,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Sharp } from './sharp';
import { AaaService } from './aaa/aaa.service';
import { TestFilter } from './test.filter';
import { AppGuard } from './app.guard';
// import { AppDto } from './app.dto';

// 申明controller
@Controller('api')
@SetMetadata('roles', ['user'])
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

  @Inject(AaaService)
  private readonly aaaService: AaaService;

  @Get()
  @UseFilters(TestFilter) // 应用 filter 捕获异常Exception
  @SetMetadata('roles', ['admin']) // 通过@SetMetadata 设置元数据
  @UseGuards(AppGuard) // 通过@UseGuards()配合reflector 拿到元数据
  // 通过@Headers() 拿到请求头
  getHello(
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
  ): string {
    console.log('------------------------------------');
    console.log('sharp: ', this.sharp.zai());
    console.log('severe: ', this.severe);
    console.log('Serious: ', this.serious);

    console.log('global: ', this.aaaService.findAll());
    console.log('------------------------------------');

    console.log('accept: ', accept);
    console.log('headers: ', headers);
    console.log('------------------------------------');

    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    return this.appService.getHello();
  }

  @Post('getHello1')
  // getHello1(@Body() aaa: AppDto) {
  //   console.log('AppDto: ', aaa, 'a: ', typeof aaa.a, 'b: ', typeof aaa.b);
  //   return 'hello';
  // }
  getHello1(@Body() aaa: { a: number; b: number }) {
    console.log('------------------------------------');
    console.log('AppDto: ', aaa, 'a: ', typeof aaa.a, 'b: ', typeof aaa.b);
    console.log('------------------------------------');
    return 'hello';
  }

  @Get('/ip')
  // 通过@Ip() 拿到请求的ip
  ip(@Ip() ip: string) {
    console.log('------------------------------------');
    console.log('请求的ip: ', ip);
    console.log('------------------------------------');
    return ip;
  }

  @Get('session')
  // 通过 @Session() 拿到session对象
  session(@Session() session) {
    console.log('------------------------------------');
    console.log('session: ', session);
    console.log('------------------------------------');
    if (!session.count) {
      session.count = 0;
    }
    session.count += 1;
    return session.count;
  }
}
