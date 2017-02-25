exports.seed = function(knex, Promise) {
  return knex('playlist_songs').del()
  .then(() => {
    return Promise.all([
      knex('playlist_songs').insert({
        id: 100,
        playlist_id: 1,
        song_id: 1
      })
      ,
      knex('playlist_songs').insert({
        id: 2,
        playlist_id: 1,
        song_id: 2
      }),
      knex('playlist_songs').insert({
        id: 3,
        playlist_id: 1,
        song_id: 3
      }),
      knex('playlist_songs').insert({
        id: 4,
        playlist_id: 1,
        song_id: 4
      }),
      knex('playlist_songs').insert({
        id: 5,
        playlist_id: 1,
        song_id: 5
      }),
      knex('playlist_songs').insert({
        id: 6,
        playlist_id: 1,
        song_id: 6
      }),
      knex('playlist_songs').insert({
        id: 7,
        playlist_id: 1,
        song_id: 7
      }),
      knex('playlist_songs').insert({
        id: 8,
        playlist_id: 2,
        song_id: 7
      }),
      knex('playlist_songs').insert({
        id: 9,
        playlist_id: 2,
        song_id: 8
      }),
      knex('playlist_songs').insert({
        id: 10,
        playlist_id: 2,
        song_id: 9
      }),
      knex('playlist_songs').insert({
        id: 11,
        playlist_id: 2,
        song_id: 10
      }),
      knex('playlist_songs').insert({
        id: 12,
        playlist_id: 2,
        song_id: 1
      })
    ])
  })
}
