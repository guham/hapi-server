import { ContainerModule, interfaces } from 'inversify';

import { LoggerInterface } from '../api/interfaces';
import { Logger } from './logger';
import { TYPES } from './types';

const containerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<interfaces.Newable<LoggerInterface>>(TYPES.NewableLogger).toConstructor<LoggerInterface>(Logger);
});

export { containerModule };
