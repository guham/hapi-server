import { injectable } from 'inversify';

import { LoggerInterface, ServiceInterface } from '../interfaces';

@injectable()
export abstract class Service<Entity> implements ServiceInterface<Entity> {
  protected logger: LoggerInterface;

  public async find(): Promise<Entity[]> {
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

  public async delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
