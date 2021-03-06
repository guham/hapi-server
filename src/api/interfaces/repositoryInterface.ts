export interface RepositoryInterface<Entity> {
  find(): Promise<Entity[]>;

  findOneById(id: string): Promise<Entity>;

  findOne(): Promise<Entity>;

  create(entity: Entity): Promise<Entity>;

  update(currentEntity: Entity, entity: Entity): Promise<Entity>;

  delete(entity: Entity): Promise<boolean>;

  countAll(): Promise<number>;
}
