import { AaaService } from 'src/aaa/aaa.service';
import { Injectable } from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';

@Injectable()
export class BbbService {
  constructor(private aaaService: AaaService) {}

  create(createBbbDto: CreateBbbDto) {
    return 'This action adds a new bbb' + createBbbDto;
  }

  findAll() {
    return `This action returns all bbb` + this.aaaService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb` + updateBbbDto;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
