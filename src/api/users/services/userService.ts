import { injectable } from 'inversify';

import { Service } from '../../interfaces';
import { User } from '../models';

@injectable()
export class UserService implements Service<User> {
  public async find(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  public async findOne(): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public async create(): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public async update(): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public async delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
