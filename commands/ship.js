    const Discord = require('discord.js');

    exports.run = async (client, message, args) => {
           
    let avatarbot = ""
            
    let avatar = message.author.displayAvatarURL({format: 'png'})
              
 const embed0 = new Discord.MessageEmbed()
        .setTitle('Hmmm, será que nós temos um novo casal aqui? :sparkling_heart:')
        .setColor('#000000')
        .setThumbnail(avatarbot)
        .setDescription("tente marcar o @ do membro!")
        .setAuthor("Requerido por " + message.author.tag, avatar)
                    
        if (!args[0]) return message.channel.send(embed0)
        if (!args[1]) return message.channel.send("você se esqueceu de mencionar o segundo usuário!")
     
        if (args[0] || args[1] || args[2]) {
            var FirstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            var SecondUser = message.mentions.members.first(-1) || message.guild.members.cache.get(args[1])
        



            if (!FirstUser) return message.channel.send(`Não consegui encontrar alguém chamado **${args[0]}**!`)
            if (!SecondUser) return message.channel.send(`Não consegui encontrar alguém chamado **${args[1]}**!`)
          
            
            
 
            if (FirstUser || SecondUser) {
                const FirstUserSliced = FirstUser.user.username.slice(0, FirstUser.user.username.length / 2)
                const SecondUserSliced = SecondUser.map(user => { return user.user.username.slice(user.user.username.length / 2) })
                const SecondUserName = SecondUser.map(user => { return user.user.username })
               
 
 

      let user = message.mentions.users.first() || client.users.cache.get(args[0]);

      let avatar0 = user.displayAvatarURL({format: 'png'})


      
   
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);


              const embed1 = new Discord.MessageEmbed()
        .setTitle('Hmmm, será que nós temos um novo casal aqui? :sparkling_heart:')
        .setColor('#000000')
        .setThumbnail(avatar0)
        .setDescription("hmmm gf vai rolar hoje?")
        .addField(`💟 ${Math.floor(love)}% ${loveLevel}`)
        .setAuthor("Requerido por " + message.author.tag, avatar)

                message.channel.send(embed1)
            }
        }
}
     