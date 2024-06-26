import {
  // Controller,
  Get,
  Headers,
  ParseIntPipe,
  Query,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders } from './my-headers.decorator';
import { MyQuery } from './my-query.decorator';
import { Ddd } from './ddd.decorator';
// import { ParseIntPipePipe } from './parse-int-pipe.pipe';

@Ddd('ddd', ['xxx', 'yyy'])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('myQuery')
  myQuery(
    @Query('name') query1,
    // @MyQuery('age', new ParseIntPipePipe() /** 自定义ParseIntPipe */) query2,
    @MyQuery('age', new ParseIntPipe()) query2,
  ) {
    return {
      query1,
      query2,
    };
  }

  @Get('myHeaders')
  myHeaders(@Headers('Accept') headers, @MyHeaders('Accept') myHeaders) {
    return {
      headers,
      myHeaders,
    };
  }

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
