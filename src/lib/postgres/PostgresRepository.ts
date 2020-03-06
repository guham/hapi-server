import { injectable } from 'inversify';
import { Model, ModelClass } from 'objection';

import { LoggerInterface, RepositoryInterface } from '../../api/interfaces';

@injectable()
export abstract class PostgresRepository<Entity extends Model> implements RepositoryInterface<Entity> {
  protected logger: LoggerInterface;
  protected model: ModelClass<Entity>;

  public async find(): Promise<Entity[]> {
    const findQuery = async (): Promise<Entity[]> => {
      const entities = await this.model.query().execute();
      return entities as Entity[];
    };

    return this.handleEntityCalls(findQuery);
  }

  public async findOneById(id: string): Promise<Entity> {
    const findOneByIdQuery = async (): Promise<Entity> => {
      return (await this.model.query().findById(id)) as Entity;
    };

    return this.handleEntityCalls(findOneByIdQuery);
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

  protected async handleEntityCalls<T>(fn: () => Promise<T>): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
