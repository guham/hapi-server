import { ServerRoute } from '@hapi/hapi';

import { container } from '../../container';
import { TYPES } from '../../types';
import { UserController } from './controllers';

const userController = container.get<UserController>(TYPES.UserController);

export const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/users',
    options: {
      handler: userController.find,
    },
  },
];
