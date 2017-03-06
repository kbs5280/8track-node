exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        id: 1,
        title: 'Title 1',
        artist_id: 1,
        created_at: new Date
      })
    ]);
  });
};
