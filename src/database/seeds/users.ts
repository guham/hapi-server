import Knex, { QueryBuilder } from 'knex';

export async function seed(knex: Knex): Promise<QueryBuilder> {
  await knex('users').insert([{ username: 'guham', email: 'guham@localhost.com', password: '123456789' }]);
}
