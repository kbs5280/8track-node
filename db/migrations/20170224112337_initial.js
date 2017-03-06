
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('artists', function(table) {
      table.increments('id').primary();
      table.string('name');

      table.timestamps();
    }),

    knex.schema.createTable('songs', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.integer('artist_id')
           .references('id')
           .inTable('artists');

      table.timestamps();
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('songs'),
    knex.schema.dropTable('artists')
  ])
};
