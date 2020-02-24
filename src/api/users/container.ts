import { ContainerModule, interfaces } from 'inversify';

import { Controller, Repository, Service } from '../interfaces';
import { UserController } from './controller';
import { User } from './models';
import { UserRepository } from './repositories';
import { UserService } from './services';
import { types } from './types';

const containerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<Controller<User>>(types.UserController).to(UserController);
  bind<Service<User>>(types.UserService).to(UserService);
  bind<Repository<User>>(types.UserRepository).to(UserRepository);
});

export { containerModule };
