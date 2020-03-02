/* eslint-disable @typescript-eslint/no-explicit-any */
import * as pkg from '../package.json';
import { getOsEnv, normalizePort } from './lib';

export const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  api: {
    name: (pkg as any).name,
    version: (pkg as any).version,
    description: (pkg as any).description,
    host: getOsEnv('API_HOST'),
    port: normalizePort(getOsEnv('API_PORT')),
    apiVersion: getOsEnv('API_VERSION'),
  },
  log: {
    level: getOsEnv('LOG_LEVEL'),
  },
  db: {
    username: getOsEnv('DB_USERNAME'),
    password: getOsEnv('DB_PASSWORD'),
    name: getOsEnv('DB_NAME'),
    host: getOsEnv('DB_HOST'),
    port: getOsEnv('DB_PORT'),
  },
};
