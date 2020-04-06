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

  public async create(entity: Entity): Promise<Entity> {
    const createQuery = async (): Promise<Entity> => {
      return (await this.model.query().insert(entity)) as Entity;
    };

    return this.handleEntityCalls(createQuery);
  }

  public async update(currentEntity: Entity, entity: Entity): Promise<Entity> {
    const updateQuery = async (): Promise<Entity> => {
      return (await currentEntity.$query().updateAndFetch(entity)) as Entity;
    };

    return this.handleEntityCalls(updateQuery);
  }

  public async delete(entity: Entity): Promise<boolean> {
    const deleteQuery = async (): Promise<boolean> => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { id } = entity as any;
      return (await this.model.query().deleteById(id)) === 1;
    };

    return this.handleEntityCalls(deleteQuery);
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
