client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("644991505873895434");
  let channel = await client.channels.cache.get("769627013815205958");
  let channel = await client.channels.cache.get("");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "]");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${fixado} Chegou logo agora? ${fixado}`)
      .setImage("https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.techtudo.com.br%2Ftudo-sobre%2Fmake-a-gif.html&psig=AOvVaw1jAA2chEcOsdX5b0yQoswL&ust=1619920504419000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiFj6iwp_ACFQAAAAAdAAAAABAD")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("O Kenned está perto de te dar um cargo bom e bonito e estadual e legal  KKKKKKKKKK")
      .setTimestamp();

    channel.send(embed);
  }
});