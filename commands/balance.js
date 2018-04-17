const db = require('quick.db');

exports.run = async (client, message, args, tools) => {

  let user = message.mentions.users.first() || message.author;

  let balance = await db.feth(`userBalance+${user.id}`);

  if (balance === null) balance = 0;

  message.channel.send(`${user.username} has \`${balance}\` Coins`)
}
