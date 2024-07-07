import { DynamicModule, Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';

@Module({})
export class AaaModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: AaaModule,
      controllers: [AaaController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        AaaService,
      ],
      exports: [],
    };
  }
}
