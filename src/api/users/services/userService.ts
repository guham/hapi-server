import { inject, injectable, interfaces } from 'inversify';

import { TYPES } from '../../../types';
import { BaseService } from '../../common';
import { LoggerInterface } from '../../interfaces';
import { User } from '../models';
import { UserRepository } from '../repositories';

@injectable()
export class UserService extends BaseService<User> {
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
