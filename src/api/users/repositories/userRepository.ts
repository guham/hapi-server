import { inject, injectable, interfaces } from 'inversify';

import { PostgresRepository } from '../../../lib/postgres';
import { TYPES } from '../../../types';
import { LoggerInterface } from '../../interfaces';
import { User } from '../models';

@injectable()
export class UserRepository extends PostgresRepository<User> {
  public constructor(@inject(TYPES.NewableLogger) Logger: interfaces.Newable<LoggerInterface>) {
    super();
    this.logger = new Logger(__filename);
    this.model = User;
  }
}
