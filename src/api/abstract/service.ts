import { injectable } from 'inversify';
import { Model } from 'objection';

import { PostgresRepository } from '../../lib/postgres';
import { LoggerInterface, ServiceInterface } from '../interfaces';

@injectable()
export abstract class Service<Entity extends Model> implements ServiceInterface<Entity> {
  protected logger: LoggerInterface;
  protected repository: PostgresRepository<Entity>;

  public async find(): Promise<Entity[]> {
    try {
      return this.repository.find();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async findOne(id: string): Promise<Entity> {
    try {
      return this.repository.findOneById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async create(entity: Entity): Promise<Entity> {
    try {
      return this.repository.create(entity);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async update(): Promise<Entity> {
    throw new Error('Method not implemented.');
  }

  public async delete(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
