import { SetMetadata } from '@nestjs/common';
import { Role } from './role';

// 自定义一个装饰器
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
