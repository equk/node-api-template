const request = require('supertest');

const app = require('../index');

describe('GET /api/v1', () => {
  it('responds with a json message', function(done) {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        status: 'success',
        message: 'Basic Json API',
        data: {
          'version_number': 'v1.0.0'
        }
      }, done);
  });
});

describe('GET path/to/nowhere', () => {
  it('returns a json 404 error', function(done) {
    request(app)
      .get('/path/to/nowhere')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, {
        message: 'Not Found'
      }, done);
  });
});