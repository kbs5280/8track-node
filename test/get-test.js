process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');
const database = require('../db/knex');

describe('GET routes', () => {

  beforeEach(() => {
  });

  describe('GET /api/v1/artists', ()  => {

    it('should return a 200 status code', (done) => {
      request(app)
        .get('/api/v1/artists')
        .expect(200, done);
    });

    it('should return a specific json object', (done) => {
      request(app)
        .get('/api/v1/artists')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((error, response) => {
          if (error) return done(error);
          assert.equal(4, response.body.length);
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

    it('should return a specific json object', (done) => {
      request(app)
        .get('/api/v1/songs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((error, response) => {
          if (error) return done(error);
          assert.equal(9, response.body.length);
          done();
        });
    });
  });

  describe('GET /api/v1/artists/:id', (done) => {
    const id = 1

    it('should return a list of songs by artist', (done) => {

      request(app)
        .get(`/api/v1/artists/${id}`)
        .expect(200)
        .end((error, response) => {
          if (error) return done(error);
          assert.equal(3, response.body.length);
          const songs = response.body.sort((a, b) => {
            return parseInt(a.title.slice(-1)) -
                   parseInt(b.title.slice(-1))
          });
          assert.equal("Test Title 3", songs.slice(-1)[0].title);
          done();
        });
    });
  })

  describe('GET /api/v1/artists-songs', (done) => {

    it('should return a list of artists and songs', (done) => {

      request(app)
        .get('/api/v1/artists-songs')
        .expect(200)
        .end((error, response) => {
          if (error) return done(error);
          assert.equal(9, response.body.length);
          const songs = response.body.sort((a, b) => {
            return parseInt(a.name.slice(-1)) -
                    parseInt(b.name.slice(-1))
          });
          assert.deepEqual({ name: 'Test Artist 3', title: 'Test Title 7' },
          songs.slice(-1)[0]);
          done();
        });
    });
  })
});
