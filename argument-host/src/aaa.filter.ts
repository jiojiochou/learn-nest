import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AaaFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
