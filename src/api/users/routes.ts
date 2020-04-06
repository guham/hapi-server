import { ServerRoute } from '@hapi/hapi';

import { container } from '../../container';
import { TYPES } from '../../types';
import { SuccessfulResponse } from '../interfaces';
import { UserController } from './controllers';
import { User } from './models';

const userController = container.get<UserController>(TYPES.UserController);

export const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/users',
    options: {
      handler: async (req, h): Promise<User[]> => userController.find(req, h),
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    options: {
      handler: async (req, h): Promise<User> => userController.findOne(req, h),
    },
  },
  {
    method: 'POST',
    path: '/users',
    options: {
      handler: async (req, h): Promise<User> => userController.create(req, h),
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    options: {
      handler: async (req, h): Promise<User> => userController.update(req, h),
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    options: {
      handler: async (req, h): Promise<SuccessfulResponse> => userController.delete(req, h),
    },
  },
];
