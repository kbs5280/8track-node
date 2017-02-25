exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        id: 1,
        title: 'Title 1',
        artist: 'Artist 1',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 2,
        title: 'Title 2',
        artist: 'Artist 2',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 3,
        title: 'Title 3',
        artist: 'Artist 3',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 4,
        title: 'Title 4',
        artist: 'Artist 4',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 5,
        title: 'Title 5',
        artist: 'Artist 5',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 6,
        title: 'Title 6',
        artist: 'Artist 6',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 7,
        title: 'Title 7',
        artist: 'Artist 7',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 8,
        title: 'Title 8',
        artist: 'Artist 8',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 9,
        title: 'Title 9',
        artist: 'Artist 9',
        created_at: new Date
      }),
      knex('songs').insert({
        id: 10,
        title: 'Title 10',
        artist: 'Artist 10',
        created_at: new Date
      })
    ]);
  });
};
