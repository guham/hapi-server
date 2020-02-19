import { inject, injectable } from 'inversify';

import { TYPES } from '../../types';
import { BaseController } from '../common';
import { User } from './models';
import { UserService } from './services';

@injectable()
export class UserController extends BaseController<User> {
  private service: UserService;

  public constructor(@inject(TYPES.UserService) service: UserService) {
    super();
    this.service = service;
  }
}
