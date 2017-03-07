exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        title: 'Title 1',
        artist_id: 1,
      }),
      knex('songs').insert({
        title: 'Title 2',
        artist_id: 1,
      }),
      knex('songs').insert({
        title: 'Title 3',
        artist_id: 1,
      }),
      knex('songs').insert({
        title: 'Title 4',
        artist_id: 2,
      }),
      knex('songs').insert({
        title: 'Title 5',
        artist_id: 2,
      }),
      knex('songs').insert({
        title: 'Title 6',
        artist_id: 2,
      }),
      knex('songs').insert({
        title: 'Title 7',
        artist_id: 3,
      }),
      knex('songs').insert({
        title: 'Title 8',
        artist_id: 3,
      }),
      knex('songs').insert({
        title: 'Title 9',
        artist_id: 3,
      })
    ]);
  });
};
