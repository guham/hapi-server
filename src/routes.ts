import Boom from '@hapi/boom';
import { ServerRoute } from '@hapi/hapi';

import { routes as userRoutes } from './api/users/routes';

export const routes: ServerRoute[] = [
  ...userRoutes,
  // catch-all route
  {
    method: '*',
    path: '/{any*}',
    handler: async (): Promise<Boom.Boom> => {
      throw Boom.notFound('The requested resource was not found');
    },
  },
];
