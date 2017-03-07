exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        id: "xxxxy",
        title: 'Title 1',
        artist_id: 1,
        created_at: new Date
      }),
      knex('songs').insert({
        id: "xxxyx",
        title: 'Title 2',
        artist_id: 1,
        created_at: new Date
      }),
      knex('songs').insert({
        id: "xxyxx",
        title: 'Title 3',
        artist_id: 1,
        created_at: new Date
      }),
      knex('songs').insert({
        id: "xyxxx",
        title: 'Title 4',
        artist_id: 2,
        created_at: new Date
      }),
      knex('songs').insert({
        id: "yxxxx",
        title: 'Title 5',
        artist_id: 2,
        created_at: new Date
      }),
      knex('songs').insert({
        id: "xxxyy",
        title: 'Title 6',
        artist_id: 2,
        created_at: new Date
      }),
      knex('songs').insert({
        id: "xxyyx",
        title: 'Title 7',
        artist_id: 3,
        created_at: new Date
      }),
      knex('songs').insert({
        id: ,"xyyxx"
        title: 'Title 8',
        artist_id: 3,
        created_at: new Date
      }),
      knex('songs').insert({
        id: "yxxyy",
        title: 'Title 9',
        artist_id: 3,
        created_at: new Date
      })
    ]);
  });
};
