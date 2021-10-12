module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('Preparando informações...');

  m.edit(`** Aqui está o meu link para me adicionar ao seu servidor!
 https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8 **` )

};