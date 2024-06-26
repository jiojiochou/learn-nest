import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AaaGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const metaData = this.reflector.get<string[] | undefined>(
      'slogan',
      context.getHandler(),
    );

    return ['唱', '跳', 'rap', '篮球'].some((r) => metaData?.includes(r));
  }
}
