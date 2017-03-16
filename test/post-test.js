process.env.NODE_ENV = 'test';

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
          assert.equal(5, response.body.length);
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
          const songs = response.body.sort((a, b) => { return a.id - b.id});
          assert.equal(song.title, songs.slice(-1)[0].title);
          assert.equal(10, response.body.length);
          done();
        });
    })
  });
});
