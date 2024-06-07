import {
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';

import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('CccModule onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccModule onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CccModule onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log('CccModule BeforeApplicationShutdown');
  }

  onApplicationShutdown() {
    // moduleRef.get() 一般在销毁的时候 取出一些provider, 执行关闭连接等销毁逻辑
    const cccService = this.moduleRef.get<CccService>(CccService);
    console.log('-------------------------------', cccService.findAll());

    console.log('CccModule onApplicationShutdown');
  }
}
