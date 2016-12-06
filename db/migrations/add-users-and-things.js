'use strict';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table) {
            table.increments();
            table.text('name');
            table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
            table.dateTime('updated_at').notNullable().defaultTo(knex.fn.now());
        }),
        knex.schema.createTable('things', function(table) {
            table.increments();
            table.integer('user_id').references('id').inTable('users');
            table.text('type');
            table.boolean('deleted');
            table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
            table.dateTime('updated_at').notNullable().defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('users'),
        knex.schema.dropTableIfExists('things')
    ]);
};
