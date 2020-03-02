import { interfaces } from 'inversify';
import Knex from 'knex';
import { Model } from 'objection';

import { LoggerInterface } from './api/interfaces';
import { container } from './container';
import { env } from './env';
import { TYPES } from './types';

const log = new (container.get<interfaces.Newable<LoggerInterface>>(TYPES.NewableLogger))(__filename);

const initDb = async (): Promise<Knex> => {
  const {
    db: { username, password, name, host, port },
    isDevelopment,
  } = env;

  const knex = Knex({
    client: 'pg',
    connection: `postgres://${username}:${password}@${host}:${port}/${name}`,
    debug: isDevelopment,
  });

  Model.knex(knex);

  log.info(`🚀 Database ready`);

  return knex;
};

export { initDb };
