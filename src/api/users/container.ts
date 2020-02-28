import { ContainerModule, interfaces } from 'inversify';

import { ControllerInterface, RepositoryInterface, ServiceInterface } from '../interfaces';
import { UserController } from './controllers';
import { User } from './models';
import { UserRepository } from './repositories';
import { UserService } from './services';
import { types } from './types';

const containerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ControllerInterface<User>>(types.UserController).to(UserController);
  bind<ServiceInterface<User>>(types.UserService).to(UserService);
  bind<RepositoryInterface<User>>(types.UserRepository).to(UserRepository);
});

export { containerModule };
