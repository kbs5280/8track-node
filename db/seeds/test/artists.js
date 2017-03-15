exports.seed = function(knex, Promise) {
  return knex('artists').del()
  .then(() => {
    return Promise.all([
      knex('artists').insert({
        name: 'Test Artist 1',
      }),
      knex('artists').insert({
        name: 'Test Artist 2',
      }),
      knex('artists').insert({
        name: 'Test Artist 3',
      })
    ]);
  });
};
