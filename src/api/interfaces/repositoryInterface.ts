export interface RepositoryInterface<Entity> {
  find(): Promise<Entity[]>;

  findOneById(id: string): Promise<Entity>;

  findOne(): Promise<Entity>;

  create(entity: Entity): Promise<Entity>;

  update(currentEntity: Entity, entity: Entity): Promise<Entity>;

  delete(): Promise<boolean>;

  countAll(): Promise<number>;
}
