import { ServerRoute } from '@hapi/hapi';

import { controller } from './controller';

export const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/users',
    options: {
      handler: controller.find,
    },
  },
];
