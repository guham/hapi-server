import { injectable } from 'inversify';

import { Repository } from '../../api/interfaces';

@injectable()
export abstract class PostgresRepository<Entity> implements Repository<Entity> {
  public async find(): Promise<Entity[]> {
    throw new Error('Method not implemented.');
  }

  public async findOneById(): Promise<Entity> {
    throw new Error('Method not implemented.');
  }

  public async findOne(): Promise<Entity> {
    throw new Error('Method not implemented.');
  }

  public async create(): Promise<Entity> {
    throw new Error('Method not implemented.');
  }

  public async update(): Promise<Entity> {
    throw new Error('Method not implemented.');
  }

  public async delete(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  public async countAll(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  protected async handleEntityManagerCalls<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
