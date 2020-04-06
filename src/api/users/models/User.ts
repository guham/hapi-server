import { Model } from 'objection';

export class User extends Model {
  id!: string;

  static get tableName(): string {
    return 'users';
  }
}
