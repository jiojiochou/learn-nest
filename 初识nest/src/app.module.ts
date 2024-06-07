import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { OtherModule } from './other/other.module';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';

// middleware
import { LogMiddleware } from './log.middleware';

// guard
// import { LoginGuard } from './login.guard';

// interceptor
// import { TimeInterceptor } from './time.interceptor';

// pipe
// import { ValidatePipe } from './validate.pipe';

@Module({
  imports: [
    PersonModule,
    OtherModule,
    AaaModule,
    BbbModule,
    DddModule,
    CccModule,
  ],
  controllers: [AppController],
  // providers: [AppService],
  // 对象写法
  providers: [
    AppService,
    // {
    //   provide: AppService,
    //   useClass: AppService,
    // },
    {
      // 可以是 string or class
      provide: 'app_service',
      useClass: AppService,
    },
    {
      provide: 'person',
      useValue: {
        name: 'aaa',
        age: 20,
      },
    },
    {
      provide: 'person2',
      useFactory() {
        return {
          name: 'bbb',
          age: 14,
        };
      },
    },
    {
      provide: 'person3',
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', AppService],
    },
    {
      provide: 'asyncProvide',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
        return {
          promise: 'fulfill',
          desc: '支持异步的factory',
        };
      },
    },
    // 用 providers 使用 guard
    // {
    //   provide: 'APP_GUARD',
    //   useClass: LoginGuard,
    // },
    // 用 providers 使用 interceptor
    // {
    //   provide: 'APP_interceptor',
    //   useClass: TimeInterceptor,
    // },
    // 用 providers 使用 pipe
    // {
    //   provide: 'APP_pipe',
    //   useClass: ValidatePipe,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('aaa*', 'bbb*');
  }
}
