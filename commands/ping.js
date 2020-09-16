module.exports = {
  name: 'ping',
  description: 'Ping!',
  usage: '<something>',
  execute(message, args) {
    message.channel.send('Pong.');
  },
};
