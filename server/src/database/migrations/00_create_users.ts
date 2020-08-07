import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', tables => {
        tables.increments('id').primary();
        tables.string('name').notNullable();
        tables.string('avatar').notNullable(); 
        tables.string('whatsapp').notNullable(); 
        tables.string('bio').notNullable(); 
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}