var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hello there', function(done) {
  //navigate to root and check the response is "hello there"
  request(app).get('/').expect('hello there', done);
 });
});
