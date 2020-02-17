import { Request, ResponseObject, Server } from '@hapi/hapi';

import { env } from './env';
import { Logger } from './lib';

const log = new Logger(__filename);

const onResponse = (req: Request): void => {
  const responseTime = req.info.completed - req.info.received;
  log.info(`${req.method.toUpperCase()} ${req.path} ${(req.response as ResponseObject).statusCode} ${responseTime} ms`);
};

export const addSubscribers = async (server: Server): Promise<void> => {
  server.events.on('response', onResponse);

  server.events.on('start', () => {
    log.info(`⚡️ ${env.api.name}@${env.api.version}, API version: ${env.api.apiVersion}`);
    log.info(`🚀 Server ready at ${server.info.uri}`);
  });
};
