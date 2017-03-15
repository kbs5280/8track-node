const database = require('../db/knex');

beforeEach((done) => {
  database.migrate.rollback()
  .then(function() {
    database.migrate.latest()
    .then(() => {
      return database.seed.run()
      .then(() => {
        done();
      });
    });
  });
});
