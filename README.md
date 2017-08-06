# apple-music-jwt

A µ-library and command line tool for generating Apple Music API developer
tokens.

[![version](https://img.shields.io/npm/v/apple-music-jwt.svg)](https://www.npmjs.org/package/apple-music-jwt)
[![status](https://travis-ci.org/scottrhoyt/apple-music-jwt.svg)](https://travis-ci.org/scottrhoyt/apple-music-jwt)
[![coverage](https://img.shields.io/coveralls/scottrhoyt/apple-music-jwt.svg)](https://coveralls.io/github/scottrhoyt/apple-music-jwt)
[![dependencies](https://david-dm.org/scottrhoyt/apple-music-jwt.svg)](https://david-dm.org/scottrhoyt/apple-music-jwt)
[![devDependencies](https://david-dm.org/scottrhoyt/apple-music-jwt/dev-status.svg)](https://david-dm.org/scottrhoyt/apple-music-jwt#info=devDependencies)

## Installation

```sh
npm install apple-music-jwt
```

## Usage

### Library

```js
var jwt = require('apple-music-jwt');

var keyID = '<music-key-id>';
var teamID = '<dev_team_id>';
var secret = '<base64_encoded_secret>'; // can also be a `Buffer` loaded from a file

var token = jwt.generate(keyID, teamID, secret);
```

### CLI

Your key ID, team ID, and secret can be provided via CLI arguments. Any missing
information will be prompted for. Your private key can be provided either by a
path to a file (`-f` or `--file`) or by base 64 encoded string (`-s` or
`--secret`).

```sh
apple-music-jwt -k '<key-id>' -t '<team-id>' -f '<path-to-private-key>'
```

## Tests

```sh
npm test
```

## License

MIT
