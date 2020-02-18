import { BaseController } from '../../common/baseController';
import { User } from './models/User';

export class UserController extends BaseController<User> {}

export const controller = new UserController();
