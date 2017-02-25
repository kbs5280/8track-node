
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('playlists', function(table) {
      table.increments('id').primary();
      table.text('name');

      table.timestamps();
    }),

    knex.schema.createTable('songs', function(table) {
      table.increments('id').primary();
      table.text('title');
      table.text('artist');

      table.timestamps();
    }),

    knex.schema.createTable('playlist_songs', function(table) {
      table.increments('id').primary();
      table.integer('playlist_id')
           .references('id')
           .inTable('playlists');
      table.integer('song_id')
           .references('id')
           .inTable('songs');

      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('playlist_songs'),
    knex.schema.dropTable('songs'),
    knex.schema.dropTable('playlists')
  ])
};
