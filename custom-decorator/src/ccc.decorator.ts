import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const Ccc = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log('data: ', data);
    console.log('executionContext: ', ctx);
    // 它的返回值就是参数装饰的值
    return 'ccc';
  },
);
