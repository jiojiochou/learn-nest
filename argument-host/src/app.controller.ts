import {
  Controller,
  Get,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';
import { AaaException } from './AaaException';
import { AaaGuard } from './aaa.guard';
import { Roles } from './roles.decorator';
import { Role } from './role';
import { AaaInterceptor } from './aaa.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('guard')
  @UseGuards(AaaGuard)
  @Roles(Role.Admin)
  guard(): string {
    return 'guard';
  }

  @Get('interceptor')
  @Roles(Role.Admin)
  @UseInterceptors(AaaInterceptor)
  interceptor() {
    return 'interceptor';
  }

  @Get()
  @UseFilters(AaaFilter) // 路由级别使用 AaaFilter
  getHello(): string {
    throw new AaaException('aaa', 'bbb');
    return this.appService.getHello();
  }
}
