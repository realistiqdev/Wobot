const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '!';

client.on('message', message => {

  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  if(!msg.startsWith(prefix)) return;
  if(message.author.bot) return;

  try {

    let commandFile = require(`/commands/${cmd}.js`);
    commandFile.run(client, message, args);

  } catch (e) {
    console.log(e.message)
  } finally {
    console.log(`${message.author.tag} ran the command ${cmd}`);
  }
})

bot.login();
