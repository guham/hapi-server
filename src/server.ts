import 'reflect-metadata';

import { interfaces } from 'inversify';

import Hapi, { Server } from '@hapi/hapi';

import { LoggerInterface } from './api/interfaces';
import { container } from './container';
import { initDb } from './database';
import { env } from './env';
import { routes } from './routes';
import { addSubscribers } from './subscribers';
import { TYPES } from './types';

const log = new (container.get<interfaces.Newable<LoggerInterface>>(TYPES.NewableLogger))(__filename);

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

    await initDb();

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
