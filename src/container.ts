import { Container } from 'inversify';

import { containerModule as userContainerModule } from './api/users/container';
import { containerModule as libContainerModule } from './lib';

const container = new Container();
container.load(libContainerModule, userContainerModule);

export { container };
