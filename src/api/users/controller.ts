import { inject, injectable, interfaces } from 'inversify';

import { Logger } from '../../lib';
import { TYPES } from '../../types';
import { BaseController } from '../common';
import { User } from './models';
import { UserService } from './services';

@injectable()
export class UserController extends BaseController<User> {
  private service: UserService;

  public constructor(
    @inject(TYPES.NewableLogger) logger: interfaces.Newable<Logger>,
    @inject(TYPES.UserService) service: UserService,
  ) {
    super();
    this.logger = new logger(__filename);
    this.service = service;
  }
}
