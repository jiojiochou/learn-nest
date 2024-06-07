import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { CreateDddDto } from './dto/create-ddd.dto';
import { UpdateDddDto } from './dto/update-ddd.dto';

@Injectable()
export class DddService implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('DddService onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('DddService onApplicationBootstrap');
  }

  create(createDddDto: CreateDddDto) {
    createDddDto;
    return 'This action adds a new ddd';
  }

  findAll() {
    return `This action returns all ddd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ddd`;
  }

  update(id: number, updateDddDto: UpdateDddDto) {
    updateDddDto;
    return `This action updates a #${id} ddd`;
  }

  remove(id: number) {
    return `This action removes a #${id} ddd`;
  }
}
