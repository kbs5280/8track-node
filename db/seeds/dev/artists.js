exports.seed = function(knex, Promise) {
  return knex('artists').del()
  .then(() => {
    return Promise.all([
      knex('artists').insert({
        id: 1,
        name: 'Artist 1',

        created_at: new Date
      }),
      knex('artists').insert({
        id: 2,
        name: 'Artist 2',

        created_at: new Date
      }),
      knex('artists').insert({
        id: 3,
        name: 'Artist 3',

        created_at: new Date
      })
    ]);
  });
};
