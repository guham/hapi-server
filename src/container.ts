import { Container, interfaces } from 'inversify';

import { Controller, Repository, Service } from './api/interfaces';
import { UserController } from './api/users/controller';
import { User } from './api/users/models';
import { UserRepository } from './api/users/repositories';
import { UserService } from './api/users/services';
import { Logger } from './lib';
import { TYPES } from './types';

const container = new Container();

container.bind<interfaces.Newable<Logger>>(TYPES.NewableLogger).toConstructor<Logger>(Logger);
// services
container.bind<Service<User>>(TYPES.UserService).to(UserService);
// controllers
container.bind<Controller<User>>(TYPES.UserController).to(UserController);
// repositories
container.bind<Repository<User>>(TYPES.UserRepository).to(UserRepository);

export { container };
