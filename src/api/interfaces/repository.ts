export interface Repository<Entity> {
  find(): Promise<Entity[]>;

  findOneById(): Promise<Entity>;

  findOne(): Promise<Entity>;

  create(): Promise<Entity>;

  update(): Promise<Entity>;

  delete(): Promise<boolean>;

  countAll(): Promise<number>;
}
