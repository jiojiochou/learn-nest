import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';

@Injectable()
export class CccService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('CccService onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('CccService onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('CccService onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log('CccService BeforeApplicationShutdown');
  }

  onApplicationShutdown() {
    console.log('CccService onApplicationShutdown');
  }

  create(createCccDto: CreateCccDto) {
    createCccDto;
    return 'This action adds a new ccc';
  }

  findAll() {
    return `This action returns all ccc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ccc`;
  }

  update(id: number, updateCccDto: UpdateCccDto) {
    updateCccDto;
    return `This action updates a #${id} ccc`;
  }

  remove(id: number) {
    return `This action removes a #${id} ccc`;
  }
}
