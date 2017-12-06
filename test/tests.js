var expect = require('chai').expect;
var appleJWT = require('../src/index.js');
var fs = require('fs');
var jwt = require('jsonwebtoken');

describe('Apple JWT Creation', () => {
  const keyID = 'testKeyID';
  const teamID = 'testTeamID';
  const privateKey = fs.readFileSync('test/test.private.pem');
  const publicKey = fs.readFileSync('test/test.public.pem');

  it('should contain the specified key ID', () => {
    const token = appleJWT.generate(keyID, teamID, privateKey);
    const decoded = jwt.decode(token, {complete: true});
    expect(decoded.header.kid).to.equal(keyID);
  });

  it('should contain the specified team ID', () => {
    const token = appleJWT.generate(keyID, teamID, privateKey);
    const decoded = jwt.verify(token, publicKey);
    expect(decoded.iss).to.equal(teamID);
  });

  it('should expire in six months', () => {
    const token = appleJWT.generate(keyID, teamID, privateKey);
    const decoded = jwt.verify(token, publicKey);
    const expiresIn = decoded.exp - decoded.iat;
    expect(expiresIn).to.equal(15724800);
  });
});
