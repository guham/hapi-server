import 'dotenv/config';
import Hapi, { Server } from '@hapi/hapi';

import { env } from './env';
import { Logger } from './lib';

const log = new Logger(__filename);

const initServer = async (): Promise<Server> =>
  new Hapi.Server({
    host: env.api.host,
    port: env.api.port,
  });

const start = async (): Promise<void> => {
  try {
    const server = await initServer();
    await server.start();
    log.info(
      `⚡️ ${env.api.name}@${env.api.version}, API version: ${env.api.apiVersion}`,
    );
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
