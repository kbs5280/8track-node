process.env.NODE_ENV || 'test';

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');
const database = require('../db/knex');

describe('POST routes', () => {

  beforeEach(() => {
  });

  describe('POST /api/v1/artists', () => {

    it('should create a new artist', (done) => {
      const artist = { name: 'Test POST New Artist' }

      request(app)
        .post('/api/v1/artists')
        .send(artist)
        .expect(201)
        .end((error, response) => {
          if(error) return done(error);
          assert.equal(artist.name, response.body.slice(-1)[0].name);
          assert.equal(4, response.body.length);
          done();
        });
    });
  });

  describe('POST /api/v1/songs', () => {

    it('should create a new song', (done) => {
      const song = { title: 'Test POST New Song', artist_id: 1 }

      request(app)
        .post('/api/v1/songs')
        .send(song)
        .expect(201)
        .end((error, response) => {
          if(error) return done(error);
          assert.equal(song.title, response.body.slice(-1)[0].title);
          assert.equal(10, response.body.length);
          done();
        });
    })
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
            assert.equal(song.title, response.body.slice(-1)[0].title);
            done();
          });
    });
  });

  describe('DELETE /api/v1/artists/:id', () => {

    it('should delete a artist', (done) => {
      const id = 4

      request(app)
      .delete(`/api/v1/artists/${id}`)
      .expect(204)
      .end(function(error, response) {
        if (error) return done(error);
        done();;
      });
    });
  });

  describe('DELETE /api/v1/songs/:id', () => {

    it('should delete a song', (done) => {
      const id = 1

      request(app)
      .delete(`/api/v1/songs/${id}`)
      .expect(204)
      .end(function(error, response) {
        if (error) return done(error);
        done();;
      });
    });
  });
});
