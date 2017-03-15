process.env.NODE_ENV || 'test';

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');
const database = require('../db/knex');

describe('DELETE routes', () => {

  beforeEach(() => {
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
