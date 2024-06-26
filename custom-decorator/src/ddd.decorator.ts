import {
  Controller,
  SetMetadata,
  UseGuards,
  applyDecorators,
} from '@nestjs/common';
import { AaaGuard } from './aaa.guard';

export const Ddd = (path: string, metaData: any) => {
  return applyDecorators(
    Controller(path),
    SetMetadata('ddd', metaData),
    UseGuards(AaaGuard),
  );
};
