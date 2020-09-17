const { prefix, token } = require('./config.json');
const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// get all commands
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

// login
client.login(token);

client.on('voiceStateUpdate', async (oldMember, newMember) => {
  let username = oldMember.member.displayName;

  let oldVoice = oldMember.channelID;
  let newVoice = newMember.channelID;

  if (oldVoice != newVoice) {
    if (oldVoice == null) {
      console.log(`hello there ${oldMember.member.displayName}`);

      if (username === 'aaoeclipse') {
        player(oldMember, 'santi.mp3');
      }
      if (username === 'Drepe') {
        player(oldMember, 'andres.mp3');
      }
      if (username === 'Viléter') {
        player(oldMember, 'martin.mp3');
      }
      if (username === 'Haazen') {
        player(oldMember, 'dubois.mp3');
      }
      if (username === 'King Wunder') {
        player(oldMember, 'wunder.mp3');
      }
      if (username === 'roflmywaffle579') {
        player(oldMember, 'chofo.mp3');
      }
      if (username === 'Like27Asians') {
        player(oldMember, 'chino.mp3');
      }
      if (username === 'Chonfat') {
        player(oldMember, 'pavon.mp3');
      }
      if (username === 'IamDeJuan') {
        player(oldMember, 'vizca.mp3');
      }
      if (username === 'GonoFam') {
        player(oldMember, 'patrcik.mp3');
      }
      console.log('User joined!');
    } else if (newVoice == null) {
      console.log('User left!');
    } else {
      console.log('User switched channels!');
    }
  }
});

async function player(currMember, soundeffect) {
  const connection = await currMember.member.voice.channel.join();
  const dispatcher = connection.play('music/' + soundeffect, { volume: 0.5 });

  dispatcher.on('start', () => {
    // console.log('test.mp3 is now playing!');
  });

  dispatcher.on('finish', () => {
    // console.log('test.mp3 has finished playing!');
    connection.disconnect();
  });

  // dispatcher.play();

  // Always remember to handle errors appropriately!
  dispatcher.on('error', console.error);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
  console.log('Ready!');
});

// client.on('message', async (message) => {
//   // if message was sent by bot or didn't have prefix then exit
//   if (!message.content.startsWith(prefix) || message.author.bot) return;
//   const args = message.content.slice(prefix.length).trim().split(/ +/);
//   const commandName = args.shift().toLowerCase();

//   if (!client.commands.has(commandName)) return;
//   const command = client.commands.get(commandName);

//   if (command.args && !args.length) {
//     let reply = `You didn't provide any arguments, ${message.author}!`;

//     if (command.usage) {
//       reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
//     }

//     return message.channel.send(reply);
//   }

//   try {
//     command.execute(message, args);
//   } catch (error) {
//     console.error(error);
//     message.reply('there was an error trying to execute that command!');
//   }
// });
