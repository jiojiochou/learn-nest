import { Reflector } from '@nestjs/core';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Role } from './role';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const requireUser = this.reflector.get<Role>('roles', context.getHandler());
    if (requireUser.includes('common')) {
      return next.handle();
    }

    if (requireUser.includes('admin', 0)) {
      return next.handle();
    }
  }
}
