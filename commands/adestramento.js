const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para adestrar');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed( )

        .setTitle('')
        .setColor('#000000')
        .setDescription(`${message.author} Acaba de adestrar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
} 