module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('Preparando informações...');

  m.edit(`** o comando para você ter acesso a lista de comandos 'g!help' **` )

};