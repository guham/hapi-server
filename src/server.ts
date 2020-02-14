import Hapi, { Server } from '@hapi/hapi';

import { Logger } from './lib';

const log = new Logger(__filename);

const initServer = async (): Promise<Server> =>
  new Hapi.Server({
    port: 3000,
    host: 'localhost',
  });

const start = async (): Promise<void> => {
  try {
    const server = await initServer();
    await server.start();
    log.info(`🚀 Server ready at ${server.info.uri}`);
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
