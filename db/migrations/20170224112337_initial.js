
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('artists', function(table) {
      table.increments('id').primary();
      table.string('name');

      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updated_at');
    }),

    knex.schema.createTable('songs', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('artist_id')
           .references('id')
           .inTable('artists');

      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updated_at');
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('songs'),
    knex.schema.dropTable('artists')
  ])
};
