import { injectable } from 'inversify';
import { Model, ModelClass } from 'objection';

import { LoggerInterface, RepositoryInterface } from '../../api/interfaces';

@injectable()
export abstract class PostgresRepository<Entity extends Model> implements RepositoryInterface<Entity> {
  protected logger: LoggerInterface;
  protected model: ModelClass<Entity>;

  public async find(): Promise<Entity[]> {
    try {
      const entities = await this.model.query().execute();
      return entities as Entity[];
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
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
