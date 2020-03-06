import { injectable } from 'inversify';
import { Model } from 'objection';

import { Request, ResponseToolkit } from '@hapi/hapi';

import { ControllerInterface, LoggerInterface } from '../interfaces';
import { Service } from './service';

@injectable()
export abstract class Controller<Entity extends Model> implements ControllerInterface<Entity> {
  protected logger: LoggerInterface;
  protected service: Service<Entity>;

  public async find(req: Request, h: ResponseToolkit): Promise<Entity[]> {
    try {
      return this.service.find();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async findOne(req: Request, h: ResponseToolkit): Promise<Entity> {
    try {
      const {
        params: { id },
      } = req;

      return this.service.findOne(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async create(req: Request, h: ResponseToolkit): Promise<Entity> {
    throw new Error('Method not implemented.');
  }

  public async update(req: Request, h: ResponseToolkit): Promise<Entity> {
    throw new Error('Method not implemented.');
  }

  public async delete(req: Request, h: ResponseToolkit): Promise<Entity> {
    throw new Error('Method not implemented.');
  }
}
