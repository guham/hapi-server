import { Request, ResponseToolkit } from '@hapi/hapi';

import { SuccessfulResponse } from './response/successfulResponse';

export interface ControllerInterface<Entity> {
  find(req: Request, h: ResponseToolkit): Promise<Entity[]>;

  findOne(req: Request, h: ResponseToolkit): Promise<Entity>;

  create(req: Request, h: ResponseToolkit): Promise<Entity>;

  update(req: Request, h: ResponseToolkit): Promise<Entity>;

  delete(req: Request, h: ResponseToolkit): Promise<SuccessfulResponse>;
}
