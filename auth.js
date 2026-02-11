const config = require('../config/config.json');

function login() {
  console.log('[Auth] Domain:', config.auth.domain);
  console.log('[Auth] Service Account:', config.auth.username);
}

module.exports = { login };
