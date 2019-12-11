'use strict';
const loopback = require('loopback');

module.exports = function enableAuthentication(server) {
  // enable authentication
  server.use(loopback.token({
    model: server.models.AccessToken,
    currentUserLiteral: 'me',
  }));
  server.enableAuth();
};
