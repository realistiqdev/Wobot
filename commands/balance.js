const Discord = require('discord.js');
const economy = require('discord-eco');

exports.run = (client, message, args) => {
  economy.fetchBalance(message.author.id).then((i) => {
    const embed = Discord.RichEmbed()
    .setDescription(`**${message.guild.name} Bank**`)
    .addField('Account Holder', message.author.username, true)
    .addField('Account Balance', i.money, true);

    message.channel.send({embed});
  })
  }
};
