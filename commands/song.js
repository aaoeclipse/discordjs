module.exports = {
  name: 'song',
  description: 'plays theme song',
  usage: '<song>',
  async execute(message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('../test.mp3');

      dispatcher.on('start', () => {
        console.log('audio.mp3 is now playing!');
      });

      dispatcher.on('finish', () => {
        console.log('audio.mp3 has finished playing!');
      });

      // Always remember to handle errors appropriately!
      dispatcher.on('error', console.error);
      dispatcher.destroy();
      connection.disconnect();
    }
  },
};
