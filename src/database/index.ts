import { interfaces } from 'inversify';
import Knex from 'knex';
import { Model } from 'objection';

import { LoggerInterface } from '../api/interfaces';
import { container } from '../container';
import { TYPES } from '../types';
import config from './knexfile';

const log = new (container.get<interfaces.Newable<LoggerInterface>>(TYPES.NewableLogger))(__filename);

const initDb = async (): Promise<Knex> => {
  const knex = Knex(config);
  Model.knex(knex);
  log.info(`🚀 Database ready`);
  return knex;
};

export { initDb };
