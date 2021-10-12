const discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Você não a permissão necessaria.`);

    let member = message.mentions.users.first();
    let reason = args.slice(1).join(" ")
    if (!member) return message.channel.send(`Mencione um usuário para banir!`)
    if (!reason) reason = "Sem Motivo!"

    try {
        message.guild.member(member).ban({ reason: reason })
        message.channel.send(`Usuário banindo! ${member} pelo motivo: ${reason}`)
    } catch (err) {
        console.log(err)
    }

};

module.exports.config = {
    name: "ban",
    aliases: ['banir']
}