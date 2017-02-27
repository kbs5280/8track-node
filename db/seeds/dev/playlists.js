exports.seed = function(knex, Promise) {
  return knex('playlists').del()
  .then(() => {
    return Promise.all([
      knex('playlists').insert({
        id: 1,
        name: 'Playlist 1',
        created_at: new Date
      }),
      knex('playlists').insert({
        id: 2,
        name: 'Playlist 2',
        created_at: new Date
      })
    ]);
  });
};
