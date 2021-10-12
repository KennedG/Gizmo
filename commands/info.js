module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('Preparando informações...');

  m.edit(	`Utilize ${config.prefix}help para a lista de comandos`,
			`${client.guilds.cache.size} servidores!`,
			`${client.channels.cache.size} canais!`,
			`${client.users.cache.size} usuários!`, )

};