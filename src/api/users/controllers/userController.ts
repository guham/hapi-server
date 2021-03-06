import { inject, injectable, interfaces } from 'inversify';

import { TYPES } from '../../../types';
import { Controller } from '../../abstract';
import { LoggerInterface } from '../../interfaces';
import { User } from '../models';
import { UserService } from '../services';

@injectable()
export class UserController extends Controller<User> {
  public constructor(
    @inject(TYPES.NewableLogger) Logger: interfaces.Newable<LoggerInterface>,
    @inject(TYPES.UserService) service: UserService,
  ) {
    super();
    this.logger = new Logger(__filename);
    this.service = service;
  }
}
