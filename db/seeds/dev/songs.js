exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        title: 'The Funeral',
        artist_id: 1
      }),
      knex('songs').insert({
        title: 'No One\'s Gonna Love You',
        artist_id: 1
      }),
      knex('songs').insert({
        title: 'I Go to the Barn Because I Like the',
        artist_id: 1
      }),
      knex('songs').insert({
        title: 'Infinite Arms',
        artist_id: 1
      }),
      knex('songs').insert({
        title: 'St. Augustine',
        artist_id: 1
      }),
      knex('songs').insert({
        title: 'I Wish I was Sober',
        artist_id: 2
      }),
      knex('songs').insert({
        title: 'My Backwards Walk',
        artist_id: 2
      }),
      knex('songs').insert({
        title: 'Modern Leper',
        artist_id: 2
      }),
      knex('songs').insert({
        title: 'Die Like a Rich Boy',
        artist_id: 2
      }),
      knex('songs').insert({
        title: 'Late March, Death March',
        artist_id: 2
      }),
      knex('songs').insert({
        title: 'Song for Zula',
        artist_id: 3
      }),
      knex('songs').insert({
        title: 'Muchacho\'s Tune',
        artist_id: 3
      }),
      knex('songs').insert({
        title: 'Reasons to Quit',
        artist_id: 3
      }),
      knex('songs').insert({
        title: 'Terror in the Canyons',
        artist_id: 3
      }),
      knex('songs').insert({
        title: 'The Last Thing I Needed',
        artist_id: 3
      }),
      knex('songs').insert({
        title: 'Ostrich',
        artist_id: 4
      }),
      knex('songs').insert({
        title: 'Juniper',
        artist_id: 4
      }),
      knex('songs').insert({
        title: 'Libre',
        artist_id: 4
      }),
      knex('songs').insert({
        title: 'Oh February',
        artist_id: 4
      }),
      knex('songs').insert({
        title: 'Death on the Road',
        artist_id: 4
      }),
      knex('songs').insert({
        title: 'God of Loss',
        artist_id: 5
      }),
      knex('songs').insert({
        title: 'Whippoorwill',
        artist_id: 5
      }),
      knex('songs').insert({
        title: 'The Ancestor',
        artist_id: 5
      }),
      knex('songs').insert({
        title: 'Blow the House Down',
        artist_id: 5
      }),
      knex('songs').insert({
        title: '1979',
        artist_id: 5
      })
    ]);
  });
};
