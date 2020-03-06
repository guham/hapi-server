export interface ServiceInterface<Entity> {
  find(): Promise<Entity[]>;

  findOne(id: string): Promise<Entity>;

  create(entity: Entity): Promise<Entity>;

  update(): Promise<Entity>;

  delete(): Promise<void>;
}
