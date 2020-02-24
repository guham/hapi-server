import { Container, ContainerModule, interfaces } from 'inversify';

import { LoggerInterface } from './api/interfaces';
import { containerModule as userContainerModule } from './api/users/container';
import { Logger } from './lib';
import { TYPES } from './types';

const libContainerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<interfaces.Newable<LoggerInterface>>(TYPES.NewableLogger).toConstructor<LoggerInterface>(Logger);
});

const container = new Container();
container.load(libContainerModule, userContainerModule);

export { container };
