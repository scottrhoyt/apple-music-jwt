var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var appleJWT = require('../src/index.js');
var secureRandom = require('secure-random');
var nJwt = require('njwt');

describe('Apple JWT Creation', () => {
  const keyID = 'testKeyID';
  const teamID = 'testTeamID';
  const signingKey = secureRandom(256, {type: 'Buffer'});

  it('should contain the specified key ID', () => {
    const token = appleJWT(keyID, teamID, signingKey);

    nJwt.verify(token, signingKey, function(err, verifiedJwt) {
      if (err) {
        assert.fail(err);
      } else {
        expect(verifiedJwt.header.kid).to.equal(keyID);
      }
    });
  });
});
