import { injectable } from 'inversify';

import { Request, ResponseToolkit } from '@hapi/hapi';

import { Controller, LoggerInterface } from '../interfaces';

@injectable()
export abstract class BaseController<Entity> implements Controller<Entity> {
  protected logger: LoggerInterface;

  public async find(req: Request, h: ResponseToolkit): Promise<Entity[]> {
    return [];
  }

  public async findOne(req: Request, h: ResponseToolkit): Promise<Entity> {
    throw new Error('Method not implemented.');
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
