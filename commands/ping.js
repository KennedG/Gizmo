module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');
 .setColor('#8E03F9')
  m.edit(`🏓 **| Pong!**\n Ping do Servidor: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\n Ping do Gizmo: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};
