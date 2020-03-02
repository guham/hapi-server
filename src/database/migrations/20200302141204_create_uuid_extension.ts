import Knex, { Raw } from 'knex';

export async function up(knex: Knex): Promise<Raw> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
}

export async function down(knex: Knex): Promise<Raw> {
  await knex.raw('DROP EXTENSION "uuid-ossp"');
}
