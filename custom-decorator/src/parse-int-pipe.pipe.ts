import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return Number.parseInt(value);
  }
}
