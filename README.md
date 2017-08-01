# apple-music-jwt

A µ-library and command line tool for generating Apple Music API developer
tokens.

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
var secret = `<base64_encoded_secret>`; // can also be a `Buffer` loaded from a file

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
