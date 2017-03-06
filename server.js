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
