const express = require('express');
const app = express();

var database = require('./db/knex');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send('Hello 8track!');
})

app.listen(8080, () => {
  console.log('8track server is live on port 8080! (http://localhost:8080)');
})

app.get('/api/artists', (request, response) => {
  database('artists').select()
    .then(function(artists) {
      response.status(200).json(artists);
    })
    .catch(function(error) {
      console.error('something is wrong with the DB');
    });
})

app.get('/api/songs', (request, response) => {
  database('songs').select()
    .then(function(songs) {
      response.status(200).json(songs);
    })
    .catch(function(error) {
      console.error('something is wrong with the database');
    });
})

app.get('/api/artists/:id', (request, response) => {
  database('songs').where('artist_id', request.params.id).select()
    .then(function(songs) {
      response.status(200).json(songs);
    })
    .catch(function(error) {
      console.error('something is wrong with the redirect')
    });
})

app.post('/api/artists', (request, response) => {
  const name = request.body.name;
  const artist = { name };

  database('artists').insert(artist)
    .then(function() {
      database('artists').select()
              .then(function(artists) {
                response.status(201).json(artists);
              })
              .catch(function(error) {
                console.error('new artist was not created, try again.')
              });
    })
})

app.post('/api/songs', (request, response) => {
  const title = request.body.title;
  const artist_id = request.body.artist_id;
  const song = { title, artist_id };

  database('songs').insert(song)
    .then(function() {
      database('songs').select()
              .then(function(songs) {
                response.status(201).json(songs);
              })
              .catch(function(error) {
                console.error('new song was not created, try again.')
              });
    })
})

app.put('/api/artists/:id', (request, response) => {
  const id = request.params.id;
  const name = request.body.name;
  const updated_at = new Date();

  database('artists').where('id', id)
    .update('name', name)
    .update('updated_at', updated_at)
    .then(function() {
      database('artists').select()
              .then(function(artists) {
                response.status(200).json(artists)
              })
              .catch(function(error) {
                console.error('artist update was unsuccessful, try again')
              });
    })
})

app.put('/api/songs/:id', (request, response) => {
  const id = request.params.id;
  const title = request.body.title;
  const artist_id = request.body.artist_id;
  const updated_at = new Date();

  database('songs').where('id', id)
    .update('title', title)
    .update('artist_id', artist_id)
    .update('updated_at', updated_at)
    .then(function() {
      database('songs').select()
              .then(function(songs) {
                response.status(200).json(songs)
              })
              .catch(function() {
                console.error('song update was unsuccessful, try again')
              });
    })
})

app.delete('/api/artists/:id', (request, response) => {
  const id = request.params.id;

  database('artists').where('id', id)
    .del()
    .then(function() {
      database('artists').select()
              .then(function(artists) {
                response.status(204).json(artists)
              })
              .catch(function() {
                console.error('song deletion unsuccessful, try again')
              });
    })
})

app.delete('/api/songs/:id', (request, response) => {
  const id = request.params.id;

  database('songs').where('id', id)
    .del()
    .then(function() {
      database('songs').select()
              .then(function(songs) {
                response.status(204).json(songs)
              })
              .catch(function() {
                console.error('song deletion unsuccessful, try again')
              });
    })
})

module.exports = app;
