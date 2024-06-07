import {
  Controller,
  Get,
  Inject,
  Query,
  UseFilters,
  UseInterceptors,
  // UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
// UseGuards
// import { LoginGuard } from './login.guard';

// intercept
// UseInterceptors
import { TimeInterceptor } from './time.interceptor';

// pipe
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Controller()
@UseInterceptors(TimeInterceptor) // 应用到整个controller
// @UsePipes(ValidatePipe) // 应用到整个controller
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Inject('app_service')
  private readonly appService: AppService;

  @Inject('person')
  private readonly person: { name: string; age: number };

  @Inject('person2')
  private readonly person2: { name: string; age: number };

  @Inject('asyncProvide')
  private readonly asyncProvide: { promise: string; desc: string };

  @Get()
  getHello(): string {
    // console.log('@inject: ', this.person);
    // console.log('@inject: ', this.person2);
    // console.log('@inject: ', this.asyncProvide);

    console.log('handler...');

    return this.appService.getHello();
  }

  @Get('aaa')
  // @UseGuards(LoginGuard)
  @UseFilters(TestFilter)
  aaa(@Query('num', ValidatePipe) num: number): string {
    console.log('aaa...');
    console.log('client-side---request1: ', typeof num);
    console.log('client-side---request2: ', num + 100); // 6760
    return 'aaa' + (num + 123);
  }

  @Get('bbb')
  bbb(): string {
    console.log('bbb...');
    return 'bbb';
  }

  @Get('ccc')
  // @UseInterceptors(TimeInterceptor)
  ccc(): string {
    console.log('ccc...');
    return 'ccc';
  }
}
