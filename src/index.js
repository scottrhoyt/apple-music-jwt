var jwt = require('jsonwebtoken');

module.exports = function(keyID, teamID, secret, callback) {
  var options = {
    issuer: teamID,
    expiresIn: 15777000, // Max time specified by Apple (6 months)
    algorithm: 'ES256',
    header: {
      kid: keyID
    }
  }

  return jwt.sign({}, secret, options, callback)
}
