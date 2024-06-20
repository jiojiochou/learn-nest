import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';
import { AaaException } from './AaaException';
import { AaaGuard } from './aaa.guard';
import { Roles } from './roles.decorator';
import { Role } from './role';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('guard')
  @UseGuards(AaaGuard)
  @Roles(Role.Admin)
  guard(): string {
    return 'guard';
  }

  @Get()
  @UseFilters(AaaFilter) // 路由级别使用 AaaFilter
  getHello(): string {
    throw new AaaException('aaa', 'bbb');
    return this.appService.getHello();
  }
}
