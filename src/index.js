var nJwt = require('njwt');

module.exports = function(keyID, teamID, secret) {
  var claims = {
    'iss': teamID,
  }

  var jwt = nJwt.create(claims, 'secret', 'ES256');

  // Set exp claim to 6 months from now
  jwt.setExpiration(new Date().getTime() + 15777000);

  jwt.setHeader('kid', keyID);

  var token = jwt.compact();

  return token;
}
