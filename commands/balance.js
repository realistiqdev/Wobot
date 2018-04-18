const fs = require('fs');
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

  let userData = JSON.parse(fs.readFileSync('./Storage/userData.json', 'utf8'));

  message.channel.send({"embed": {
    title: "Bank",
    color: 0xF1C40F,
    fields:[{
      name: "Account Holder",
      value: message.author.username,
      inline: true
    },
  {
    name: "Account Balance",
    value: userData[sender.id + message.guild.id].money,
    inline: true
  }]
  }})
}
