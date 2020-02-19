import { inject, injectable } from 'inversify';

import { TYPES } from '../../../types';
import { Service } from '../../interfaces';
import { User } from '../models';
import { UserRepository } from '../repositories';

@injectable()
export class UserService implements Service<User> {
  private repository: UserRepository;

  public constructor(@inject(TYPES.UserRepository) repository: UserRepository) {
    this.repository = repository;
  }

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
