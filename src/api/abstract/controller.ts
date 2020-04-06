import { injectable } from 'inversify';
import { isUndefined } from 'lodash/fp';
import { Model } from 'objection';

import boom from '@hapi/boom';
import { Request, ResponseToolkit } from '@hapi/hapi';

import { ControllerInterface, LoggerInterface, SuccessfulResponse } from '../interfaces';
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

      const entity = await this.service.findOne(id);
      if (isUndefined(entity)) {
        throw boom.notFound('Entity not found');
      }

      return entity;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async create(req: Request, h: ResponseToolkit): Promise<Entity> {
    try {
      const { payload: entity } = req;

      return this.service.create(entity as Entity);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async update(req: Request, h: ResponseToolkit): Promise<Entity> {
    try {
      const { payload: entity } = req;

      const currentEntity = await this.findOne(req, h);
      return this.service.update(currentEntity, entity as Entity);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async delete(req: Request, h: ResponseToolkit): Promise<SuccessfulResponse> {
    try {
      const currentEntity = await this.findOne(req, h);
      await this.service.delete(currentEntity);
      return { message: 'Resource successfully deleted' };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
