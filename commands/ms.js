module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência do Gizmo: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};