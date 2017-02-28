const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send('Hello 8track!');
});

app.listen(8080, () => {
  console.log('8track server is live on port 8080! (http://localhost:8080)');
});

app.get('/api/playlists', (request, response) => {
  database('playlists').select()
    .then(function(playlists) {
      response.status(200).json(playlists);
    })
    .catch(function(error) {
      console.error('somethings wrong with the DB')
    });
})

app.get('/api/songs', (request, response) => {
  database('songs').select()
        .then(function(songs) {
          response.status(200).json(songs);
        })
        .catch(function(error) {
          console.log('something is wrong with the DB')
        })
})

app.post('/api/playlists', (request, response) => {
  const name = request.body.name;
  const title = request.body.title;
  const artist = request.body.artist;
  console.log(name, title, artist);
  const playlist = { name };
  const song = { title, artist };

  database('playlists').insert(playlist)
    .then(function() {
      database('playlists').select()
              .then(function(playlists) {
                response.status(200).json(playlists);
              })
              .catch(function(error) {
                console.log('playlist not saved to DB');
              });
    })
});

app.post('/api/songs', (request, response) => {
  const title = request.body.title;
  const artist = request.body.artist;
  const song = { title, artist };

  database('songs').insert(song)
    .then(function() {
      database('songs').select()
              .then(function(songs) {
                response.status(200).json(songs)
              })
              .catch(function(error) {
                console.log('song not saved to DB');
              });
    })
});
