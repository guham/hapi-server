import Knex, { SchemaBuilder } from 'knex';

export async function up(knex: Knex): Promise<SchemaBuilder> {
  await knex.schema.createTable('users', t => {
    t.uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    t.string('username')
      .unique()
      .notNullable();
    t.string('email')
      .unique()
      .notNullable();
    t.string('password').notNullable();
    t.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<SchemaBuilder> {
  await knex.schema.dropTable('users');
}
