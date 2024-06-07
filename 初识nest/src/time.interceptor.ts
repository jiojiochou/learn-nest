import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();

    // context.getClass()拿到某个controller, context.getHandler()拿到某个controller下面的方法
    console.log(
      'context.getClass: ',
      context.getClass(),
      'context.getHandler: ',
      context.getHandler(),
    );
    return next.handle().pipe(
      tap(() => {
        console.log('time: ', Date.now() - startTime);
      }),
    );
  }
}
