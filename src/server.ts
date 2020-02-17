import 'dotenv/config';
import Hapi, { Server, Request, ResponseObject } from '@hapi/hapi';

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

    server.events.on('response', (req: Request) => {
      const responseTime = req.info.completed - req.info.received;
      log.info(
        `${req.method.toUpperCase()} ${req.path} ${(req.response as ResponseObject).statusCode} ${responseTime} ms`,
      );
    });

    server.events.on('start', () => {
      log.info(`⚡️ ${env.api.name}@${env.api.version}, API version: ${env.api.apiVersion}`);
      log.info(`🚀 Server ready at ${server.info.uri}`);
    });

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
