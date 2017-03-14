process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');

describe('GET /api/artists', ()  => {

  it('should return a 200 status', (done) => {
    request(app)
      .get('/api/artists')
      .expect(200, done);
  });

  it('should return a json object', (done) => {
    request(app)
      .get('/api/artists')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(error, response) {
        if (error) return done(error);
        done();
      });
  });
});

describe('POST /api/artists', () => {

  it('should create a new artist', (done) => {
    const artist = { name: 'Test Artist 1' }

    request(app)
      .post('/api/artists')
      .send(artist)
      .expect(200)
      .end(function(error, response) {
        if (error) return done(error);
        done();
      });
  });
});
