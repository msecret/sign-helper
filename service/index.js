'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 8080
});

// Add the route
server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    console.log('fuckfucfukdafdsal;zsgdvf');
    return reply('world');
  }
});

server.route({
  method: 'GET',
  path:'/hello',
  handler: function (request, reply) {
    console.log('fasdfsadfuckfucfukdafdsal;zsgdvf');
    return reply('hello world');
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});
