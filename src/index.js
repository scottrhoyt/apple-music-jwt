var jwt = require('jsonwebtoken');

/**
 * Parses and validates a filename of the form: <base64-email>.<id>.<extension>
 *
 * If the filename cannot be parsed, decoded, or validated, the function throws
 * an error.
 *
 * @param {string} keyID - The Music Key ID available from your apple developer account.
 * @param {string} teamID - The Team ID associated with your apple developer account.
 * @param {string|buffer} secret - The secret to sign the JWT with. Available from your apple developer account.
 * @return {string} - The JWT signed and encoded into a string.
 */
module.exports.generate = function(keyID, teamID, secret, callback) {
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
