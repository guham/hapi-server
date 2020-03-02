import { Config } from 'knex';
import path from 'path';

import { env } from '../env';

const {
  db: { username, password, name, host, port },
  isDevelopment,
} = env;

const config: Config = {
  client: 'pg',
  connection: `postgres://${username}:${password}@${host}:${port}/${name}`,
  debug: isDevelopment,
  migrations: {
    directory: path.resolve('./migrations'),
  },
  seeds: {
    directory: path.resolve('./seeds'),
  },
};

export = config;
