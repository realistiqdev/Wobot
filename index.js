const Discord = require('discord.js');
const fs = require('fs');

let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));

const client = new Discord.Client();
const prefix = '!';

client.on('message', message => {

  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  if(!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {};
  if(!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 0;

  fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err);
  })

  if(!msg.startsWith(prefix)) return;
  if(message.author.bot) return;

  try {

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);

  } catch (e) {
    console.log(e.message)
  } finally {
    console.log(`${message.author.tag} ran the command ${cmd}`);
  }
})

client.login(process.env.BOT_TOKEN);
