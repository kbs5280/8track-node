process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');
const database = require('../db/knex');

describe('PUT routes', () => {

  beforeEach(() => {
  });

  describe('PUT /api/v1/artists/:id', () => {
    const artist = { name: 'Test PUT Update Artist 1', id: 1 }

    it('should update an artist', (done) => {

        request(app)
          .put(`/api/v1/artists/${artist.id}`)
          .send(artist)
          .expect(200)
          .end((error, response) => {
            if (error) return done(error);
            const artists = response.body.sort((a, b) => { return b.id - a.id});
            assert.equal(artist.name, artists.slice(-1)[0].name);
            done();
          });
    });
  });

  describe('PUT /api/v1/songs/:id', () => {
    const song = { title: 'Test PUT Update Song 1', id: 1, artist_id: 1 }

    it('should update an song', (done) => {

        request(app)
          .put(`/api/v1/songs/${song.id}`)
          .send(song)
          .expect(200)
          .end((error, response) => {
            if (error) return done(error);
            const songs = response.body.sort((a, b) => { return b.id - a.id});
            assert.equal(song.title, songs.slice(-1)[0].title);
            done();
          });
    });
  });
});
