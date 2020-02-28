export interface ServiceInterface<Entity> {
  find(): Promise<Entity[]>;

  findOne(): Promise<Entity>;

  create(): Promise<Entity>;

  update(): Promise<Entity>;

  delete(): Promise<void>;
}
