import 'dotenv/config';

import Hapi, { Server } from '@hapi/hapi';

import { env } from './env';
import { Logger } from './lib';
import { addSubscribers } from './subscribers';
import { routes } from './routes';

const log = new Logger(__filename);

const initServer = async (): Promise<Server> =>
  new Hapi.Server({
    host: env.api.host,
    port: env.api.port,
  });

const start = async (): Promise<void> => {
  try {
    const server = await initServer();
    await addSubscribers(server);

    // prefix all routes with API version
    server.realm.modifiers.route.prefix = `/api/${env.api.apiVersion}`;
    server.route(routes);

    await server.start();
  } catch (error) {
    log.error('Unable to start the server', error.message);
    throw error;
  }
};

process.on('unhandledRejection', error => {
  log.error('event unhandledRejection', error);
  process.exit(1);
});

start();
