exports.seed = function(knex, Promise) {
  return knex('artists').del()
  .then(() => {
    return Promise.all([
      knex('artists').insert({
        name: 'Band of Horses'
      }),
      knex('artists').insert({
        name: 'Frightened Rabbit'
      }),
      knex('artists').insert({
        name: 'Phosphorescent'
      }),
      knex('artists').insert({
        name: 'Y La Bamba'
      }),
      knex('artists').insert({
        name: 'Darlingside'
      })
    ]);
  });
};
