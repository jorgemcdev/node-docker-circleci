/* global describe it beforeEach */
/* eslint no-unused-vars: 0 */
/* eslint no-shadow: 0 */

import chaiHttp from 'chai-http';
import chai from 'chai';

import server from './../src/';

const should = chai.should();
chai.use(chaiHttp);

// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Our parent block
describe('Test index.js', () => {
  describe('/ Home', () => {
    it('it should GET homepage', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
