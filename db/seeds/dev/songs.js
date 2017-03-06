exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        id: 1,
        title: 'Title 1',
        artist_id: 1,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 2,
        title: 'Title 2',
        artist_id: 1,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 3,
        title: 'Title 3',
        artist_id: 1,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 4,
        title: 'Title 4',
        artist_id: 2,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 5,
        title: 'Title 5',
        artist_id: 2,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 6,
        title: 'Title 6',
        artist_id: 2,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 7,
        title: 'Title 7',
        artist_id: 3,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 8,
        title: 'Title 8',
        artist_id: 3,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 9,
        title: 'Title 9',
        artist_id: 3,
        created_at: new Date
      })
    ]);
  });
};
