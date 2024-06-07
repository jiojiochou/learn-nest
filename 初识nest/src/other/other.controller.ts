import { Controller, Get } from '@nestjs/common';
import { OtherService } from './other.service';

@Controller('api/other')
export class OtherController {
  constructor(private readonly otherService: OtherService) {}

  @Get()
  get() {
    return 'api/other';
  }

  @Get('aaa')
  findAll() {
    return this.otherService.findAll();
  }
}
