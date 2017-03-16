const express = require('express');
const app = express();

const database = require('./db/knex');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send('Hello 8track!');
})

if (!module.parent) {
  app.listen(process.env.PORT || 8080, () => {
    console.log('8track server is live on port 8080! (http://localhost:8080)');
  });
}

app.get('/api/v1/artists', (request, response) => {
  database('artists').select()
    .then((artists) => {
      response.status(200).json(artists);
    })
    .catch((error) => {
      console.error('something is wrong with the DB');
    });
})

app.get('/api/v1/songs', (request, response) => {
  database('songs').select()
    .then((songs) => {
      response.status(200).json(songs);
    })
    .catch((error) => {
      console.error('something is wrong with the database');
    });
})

app.get('/api/v1/artists/:id', (request, response) => {
  database('songs').where('artist_id', request.params.id).select()
    .then((songs) => {
      response.status(200).json(songs);
    })
    .catch((error) => {
      console.error('something is wrong with the redirect')
    });
})

app.post('/api/v1/artists', (request, response) => {
  const name = request.body.name;
  const artist = { name };

  database('artists').insert(artist)
    .then(() => {
      database('artists').select()
              .then((artists) => {
                response.status(201).json(artists);
              })
              .catch((error) => {
                console.error('new artist was not created, try again.')
              });
    })
})

app.post('/api/v1/songs', (request, response) => {
  const title = request.body.title;
  const artist_id = request.body.artist_id;
  const song = { title, artist_id };

  database('songs').insert(song)
    .then(() => {
      database('songs').select()
              .then((songs) => {
                response.status(201).json(songs);
              })
              .catch((error) => {
                console.error('new song was not created, try again.')
              });
    })
})

app.put('/api/v1/artists/:id', (request, response) => {
  const id = request.params.id;
  const name = request.body.name;
  const updated_at = new Date();

  database('artists').where('id', id)
    .update('name', name)
    .update('updated_at', updated_at)
    .then(() => {
      database('artists').select()
              .then((artists) => {
                response.status(200).json(artists)
              })
              .catch((error) => {
                console.error('artist update was unsuccessful, try again')
              });
    })
})

app.put('/api/v1/songs/:id', (request, response) => {
  const id = request.params.id;
  const title = request.body.title;
  const artist_id = request.body.artist_id;
  const updated_at = new Date();

  database('songs').where('id', id)
    .update('title', title)
    .update('artist_id', artist_id)
    .update('updated_at', updated_at)
    .then(() => {
      database('songs').select()
              .then((songs) => {
                response.status(200).json(songs)
              })
              .catch(() => {
                console.error('song update was unsuccessful, try again')
              });
    })
})

app.delete('/api/v1/artists/:id', (request, response) => {
  const id = request.params.id;

  database('artists').where('id', id)
    .del()
    .then(() => {
      database('artists').select()
              .then((artists) => {
                response.status(204).json(artists)
              })
              .catch(() => {
                console.error('song deletion unsuccessful, try again')
              });
    })
})

app.delete('/api/v1/songs/:id', (request, response) => {
  const id = request.params.id;

  database('songs').where('id', id)
    .del()
    .then(() => {
      database('songs').select()
              .then((songs) => {
                response.status(204).json(songs)
              })
              .catch(() => {
                console.error('song deletion unsuccessful, try again')
              });
    })
})

module.exports = app;
