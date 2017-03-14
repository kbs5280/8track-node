// process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');

const knexCleaner = require('knex-cleaner');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);


// const database = require('knex')({
//   client: 'pg',
//   connection: {
//     host     : '127.0.0.1',
//     // user     : 'your_database_user',
//     // password : 'your_database_password',
//     database : 'artists_test'
//   }
// });

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

describe('POST /api/artists', () => {

  it('should create a new artist', (done) => {
    knexCleaner.clean(database).then(function() {
    const artist = { name: 'Test Artist 1' }

      request(app)
        .post('/api/artists')
        .send(artist)
        .expect(201)
        .end((error, response) => {
          if(error) return done(error);
          assert.equal(artist.name, response.body.pop().name);
          done();
       });
     });
  });
});

describe('PUT /api/artists/:id', () => {
  const newArtist = { name: 'New Artist 1' }
  const updatedArtist = { name: 'Updated Artist 1' }

  it('should update an artist', (done) => {
    knexCleaner.clean(database).then(function() {

      request(app)
        .post('/api/artists')
        .send(newArtist)
        .expect(201)
        .end((error, response) => {
          if(error) return done(error);
          assert.equal("New Artist 1", response.body.slice(-1)[0].name);
          const id = response.body.slice(-1)[0].id;
          console.log(id);
          done();
       });
        // .put(`/api/artists/${id}`)
        // .send(artist)
        // .expect(200)
        // .end((error, response) => {
        //   console.log(response.body.pop().name, response.body.pop().id);
        //   if (error) return done(error);
        //   // assert.equal(id, response.body.pop().id);
        //   // assert.equal(artist.name, response.body.pop().name);
        //   done();
        // });
      });
  });
});

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
