import { inject, injectable, interfaces } from 'inversify';

import { TYPES } from '../../../types';
import { Service } from '../../abstract';
import { LoggerInterface } from '../../interfaces';
import { User } from '../models';
import { UserRepository } from '../repositories';

@injectable()
export class UserService extends Service<User> {
  private repository: UserRepository;

  public constructor(
    @inject(TYPES.NewableLogger) Logger: interfaces.Newable<LoggerInterface>,
    @inject(TYPES.UserRepository) repository: UserRepository,
  ) {
    super();
    this.logger = new Logger(__filename);
    this.repository = repository;
  }
}
