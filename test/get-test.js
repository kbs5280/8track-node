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
          assert.equal(9, response.body.length);
          if (error) return done(error);
          done();
        });
    });
  });
});
