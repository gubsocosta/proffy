import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', tables => {
        tables.increments('id').primary();
        tables.string('subject').notNullable();
        tables.decimal('cost').notNullable();

        tables.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}