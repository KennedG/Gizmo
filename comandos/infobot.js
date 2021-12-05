const Discord = require('discord.js')
const moment = require('moment')
const cpuStat = require("cpu-stat");
let os = require("os");

moment.locale('pt-br')
exports.run = (client, message, args) => {

  let botAvatar = client.user.displayAvatarURL
  let date = client.user.createdAt
  let userName = client.user.username

  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `${days} dias, ${hours} horas, ${minutes} minutos`;

  module.exports ={
    name: "z",
    run:  async (client, message, args) => {
  cpuStat.usagePercent(function(err, percent, seconds) {
   if (err) {
   return console.log(err);
   }
  const a = new Discord.MessageEmbed()
  message.channel.send(a)
  })
    }
   }
module.exports = {
	run: function(client, message, args) {
		const inline = true
		const date = client.user.createdAt
		const userName = client.user.username
		const status = {
			online: '`🟢` Online',
			offline: '`⚫` Offline',
		}
		const link = '  '

		const embed = new Discord.MessageEmbed()
			.setColor(process.env.COLOR)
			.setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}?size=1024`)
			.setAuthor('Olá! Eu sou o Gizmo e estou aqui para te ajudar no que precisar!')
			.setDescription(`
     <:coroa:910509283010031646>**|Dono**
     [! Kenned#0001](https://github.com/KennedG)
    
     <:info:916909634403573801>** | Infomações gerais**
     > Servidores: **${client.guilds.cache.size} **
     > Usuários: **${client.users.cache.size}**
     > Tempo online: **${uptime}**
     > Fui criado há: **26/02/2021**


     <:engrenagem:916913635169816597> **  |  Informações técnicas**
     > Total de Memória sendo Usada: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB**
     > Versão do Node: **v12.16.1**
     > Versão do discord.js: **v12.1.0**
     

     <:download:910474079931338813> ** | Hospedagem**
     > Host: **[Replit](https://replit.com/~)**
     > Ping: **${Math.round(client.ws.ping)}**
     
     <:dcl_ypSino:914350019182723122> **| Meus links**
     > <a:sintonia_emoji239:909266143204741181> [Website](https://sites.google.com/view/botgizmo)
     > <:badgePartner:909263598788968478> [Link Do Meu Servidor](https://discord.gg/Vk8sEtb4n5)
     > <a:ovelhamine:861997113537724436> [Meu convite](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)`)

			.setTimestamp()

		if (client.user.presence.status) {
			embed.addField(
				'**Status**',
				status[client.user.presence.status],
				inline,
				true,
			)
		}

		message.channel.send(embed)
	},

	conf: {},

	get help() {
		return {
			name: 'botinfo',
			category: 'Informação',
			description: 'Mostra informações do bot.',
			usage: '!botinfo',
		}
	},
}
}
