const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF00FF')
    .setDescription(` Minha lista de comandos ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: 'g!avatar',
            value: `Mostra a foto/gif da pessoa mencionada.`,
            inline: true
        },



        {
            name: 'g!beijar',
            value: `Você beija alguém pela internet.`,
            inline: true
        },



        {
            name: 'g!clear',
            value: `Apaga a quantidade de mensagens citadas.`,
            inline: true
        },



        {
            name: 'g!sugestão.',
            value: `Você pode nós dar ideia para melhorar o servidor.`,
            inline: true
        },


        {
            name: 'g!emo',
            value: `nós escrevemos o meme do " ...eu não sou bonito, sério" em questão de **Segundos** `,
            inline: true
        }, 


        {
            name: 'g!coinflip',
            value: ` joga-se uma moeda para cima que seu valor é escolhido
            g!coinflip cara `,
            inline: true
        }, 


        {
            name: 'g!paulin',
            value: `nós escrevemos o meme do "Paulinho da canoa" em questão de **Segundos** `,
            inline: true
        },

        {
            name: 'g!ms',
            value: `Você pode ver o ping da API e do servidor que você está conectado.`,
            inline: true
        },



        {
            name: 'g!say',
            value: `Você pode falar como se fosse o Gizmo.`,
            inline: true
        },


        {
            name: 'g!uptime',
            value: `Pode ver a quanto tempo eu estou online lhe servindo!`,
            inline: true
        }, 
        
         {
            name: 'g!suporte',
            value: `Um link para suporte do Gizmo.
           Entre lá e nós conte oque houve!
          
            `,
            inline: true



        },
        
        {
            name: 'g!ban',
            value: `Você poderá banir um usuário mencionado.`,
            inline: true
        },


        {
            name: 'g!8ball.',
            value: `Te da resposta para suas perguntas!.`,
            inline: true
        },

        {
            name: 'g!dados.',
            value: `Joga um ou mais dados para cima e exibe o resultado.`,
            inline: true
        },


 {
            name: 'g!jokempo.',
            value: `Faz uma disputa de Pedra,papel e tesoura.`,
            inline: true
        },

         {
            name: 'g!lembrete.',
            value: `Para quando você não pode esquecer de algo.   Caso não consiga use g!comandos.`,
            usage: 'Exemplo g!lembrete 1d [mensagem]  e você pode colocar S como segundos, D como dias e assim por diante',
            inline: true
        },



         {
            name: 'g!forca',
            value: `O Gizmo abre uma partida de Forca.`,
            inline: true
        },


    {
            name: 'g!link',
            value: `Link para a minha adesão no servidor.`,
            inline: true
        },


                {
            name: 'g!reload',
            value: `Reinicia arquivo INDEX.js do Gizmo! `,
            inline: true
        }, 

        {
            name: 'g!userinfo',
            value: `Mostra informações sobre o usuário.`,
            inline: true
        },


        {
            name: 'g!serverinfo',
            value: `Informação sobre o servidor`,
            inline: true
        },


        {
            name: 'g!infobot',
            value: `Informação sobre o Bot`,
            inline: true
        },

        {
            name: 'g!ship',
            value: `Está querendo fazer uma prova de amor pra sua webnamoradx? Deixa comigo! Vou te ajudar nesta missão.`,
            inline: true
        },
    )
    message.channel.send(embed);
}