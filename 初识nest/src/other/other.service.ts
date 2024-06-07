import { Injectable } from '@nestjs/common';
import { AaaService } from 'src/aaa/aaa.service';

@Injectable()
export class OtherService {
  constructor(private readonly aaaService: AaaService) {}

  xxx() {
    return 'xxx';
  }

  findAll() {
    return `This action returns all person` + this.aaaService.findAll();
  }
}
