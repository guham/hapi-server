export interface ServiceInterface<Entity> {
  find(): Promise<Entity[]>;

  findOne(id: string): Promise<Entity>;

  create(entity: Entity): Promise<Entity>;

  update(currentEntity: Entity, entity: Entity): Promise<Entity>;

  delete(entity: Entity): Promise<boolean>;
}
