process.env.NODE_ENV || 'test';

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');
const database = require('../db/knex');
const cleanDatabase = require('./test-helper');

// create separate test file
// create helper methods in helper file for before functions

describe('API routes', () => {

  beforeEach(() => {
  });

  describe('GET /api/v1/artists', ()  => {

    it('should return a 200 status code', (done) => {
      request(app)
        .get('/api/v1/artists')
        .expect(200, done);
    });

    it('should return a json object', (done) => {
      request(app)
        .get('/api/v1/artists')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((error, response) => {
          if (error) return done(error);
          assert.equal(3, response.body.length);
          done();
        });
    });
  });

  describe('GET /api/v1/songs', () => {

    it('should return a 200 status code', (done) => {
      request(app)
        .get('/api/v1/songs')
        .expect(200, done);
    });

    it('should return a json object', (done) => {
      request(app)
        .get('/api/v1/songs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((error, response) => {
          assert.equal(9, response.body.length);
          if (error) return done(error);
          done();
        });
    });
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
