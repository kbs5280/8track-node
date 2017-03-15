process.env.NODE_ENV || 'test';

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');
const database = require('../db/knex');

// *** add specifics to GET requests etc with beforeEach ***

describe('GET /api/artists', ()  => {

  it('should return a 200 status code', (done) => {
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
      .end((error, response) => {
        console.log(response.body);
        if (error) return done(error);
        done();
      });
  });
});

describe('GET /api/songs', () => {

  it('should return a 200 status code', (done) => {
    request(app)
      .get('/api/artists')
      .expect(200, done);
  });

  it('should return a json object', (done) => {
    request(app)
      .get('/api/songs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        if (error) return done(error);
        done();
      });
  });
});

describe('API routes', function() {
  beforeEach(function(done) {
    database.migrate.rollback()
    .then(function() {
      database.migrate.latest()
      .then(function() {
        return database.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function() {
    database.migrate.rollback()
    .then(function() {
      done();
    });
  });


describe('POST /api/artists', () => {

  it('should create a new artist', (done) => {
    const artist = { name: 'Test POST New Artist' }

    request(app)
      .post('/api/artists')
      .send(artist)
      .expect(201)
      .end((error, response) => {
        console.log(response.body);
        if(error) return done(error);
        assert.equal(artist.name, response.body.slice(-1)[0].name);
        done();
      });
  });
});





});







// describe('PUT /api/artists/:id', () => {
//   const newArtist = { name: 'PUT Artist 1' }
//   const updatedArtist = { name: 'Updated Artist 1' }
//
//   it('should update an artist', (done) => {
//     knexCleaner.clean(database).then(function() {
//
//       request(app)
//         .post('/api/artists')
//         .send(newArtist)
//         .expect(201)
//         .end((error, response) => {
//           console.log(response.body);
//           if(error) return done(error);
//           assert.equal(newArtist.name, response.body.slice(-1)[0].name);
//           const id = response.body.slice(-1)[0].id;
//           console.log(id);
//           done();
//        });
//         // .put(`/api/artists/${artist.id}`)
//         // .send(artist)
//         // .expect(200)
//         // .end((error, response) => {
//         //   // console.log(response.body.pop().name, response.body.pop().id);
//         //   if (error) return done(error);
//         //   assert.equal(artist.name, response.body.slice(-1)[0].name);
//         //   done();
//         // });
//       });
//   });
// });

// describe('DELETE /api/artists/:id', () => {
//
//   it('should delete an artist', (done) => {
//     const id = 1
//
//     request(app)
//       .delete(`/api/artists/${id}`)
//       .expect(200)
//       .end(function(error, response) {
//         if (error) return done(error);
//         done();;
//       });
//   });
// });
