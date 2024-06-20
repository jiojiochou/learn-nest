import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AaaException } from './AaaException';
import { /** Request */ Response } from 'express';

@Catch(AaaException) // 在@Catch()填入 AaaException 捕获AaaException类型的异常
export class AaaFilter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    /** 1. exception 异常对象 */
    /**
     * 2. 译: 主机, 主持人;
     *  2.1 host.contextType 上下问类型
     *  2.2 host.args 上下文对象 {request, response, next}类数组对象
     *  2.3 host.getArgs() 获取上下文对象的方法
     *  2.4 host.getArgByIndex() 通过下标获取上下文对象上的某个属性和方法 (不建议使用下标获取)
     *  2.5 host.getNext() 获取 host.args 上下文对象上的Next方法
     *  2.6 host.getRequest() 获取 host.args 上下文对象上的Request对象
     *  2.7 host.getResponse() 获取 host.args 上下文对象上的Response对象
     */
    // console.log(exception, host);
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      // const request = ctx.getRequest<Request>();

      response.status(500).json({
        aaa: exception.aaa,
        bbb: exception.bbb,
      });
    } else if (host.getType() === 'ws') {
    } else if (host.getType() === 'rpc') {
    }
  }
}
