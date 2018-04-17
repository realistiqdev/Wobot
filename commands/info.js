exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor('Bot Info', 'https://i.imgur.com/kDX3dso.png')
  .setColor(0xC21E56)
  .addField('Name', 'Wobot', true)
  .addField('Description', 'An upcoming multi purpose discord bot.', true)
  .addField('Author', 'brutall', true);

  message.channel.send(embed);
  }
};
