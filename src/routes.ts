import Boom from '@hapi/boom';
import { ServerRoute } from '@hapi/hapi';

export const routes: ServerRoute[] = [
  {
    method: '*',
    path: '/{any*}',
    handler: async (): Promise<Boom.Boom> => {
      throw Boom.notFound('The requested resource was not found');
    },
  },
];
