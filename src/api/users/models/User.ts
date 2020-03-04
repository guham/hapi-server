import { Model } from 'objection';

export class User extends Model {
  static get tableName(): string {
    return 'users';
  }
}
