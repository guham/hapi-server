import { Request, ResponseToolkit } from '@hapi/hapi';

export class BaseController<Entity> {
  public async find(req: Request, h: ResponseToolkit): Promise<Entity[]> {
    return [];
  }

  public async findOne(req: Request, h: ResponseToolkit): Promise<Entity> {
    return {} as Entity;
  }

  public async create(req: Request, h: ResponseToolkit): Promise<Entity> {
    return {} as Entity;
  }

  public async update(req: Request, h: ResponseToolkit): Promise<Entity> {
    return {} as Entity;
  }

  public async delete(req: Request, h: ResponseToolkit): Promise<Entity> {
    return {} as Entity;
  }
}
