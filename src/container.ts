import { Container } from 'inversify';

import { Service } from './api/interfaces';
import { UserController } from './api/users/controller';
import { User } from './api/users/models';
import { UserService } from './api/users/services';
import { TYPES } from './types';

const container = new Container();
// services
container.bind<Service<User>>(TYPES.UserService).to(UserService);
// controllers
container.bind<UserController>(TYPES.UserController).to(UserController);

export { container };
