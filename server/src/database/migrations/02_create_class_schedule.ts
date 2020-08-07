import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', tables => {
        tables.increments('id').primary();
        tables.integer('week_day').notNullable();
        tables.integer('from').notNullable();
        tables.integer('to').notNullable();

        tables.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}