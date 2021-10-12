module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('Preparando link...');

  m.edit(`** Link do discord para suporte:   https://discord.gg/wRf8gtKC4P **` )

};