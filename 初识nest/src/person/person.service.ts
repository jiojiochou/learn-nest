import { AaaService } from 'src/aaa/aaa.service';
import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  private readonly aaaService: AaaService;

  create(createPersonDto: CreatePersonDto) {
    createPersonDto;
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person` + this.aaaService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    updatePersonDto;
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
