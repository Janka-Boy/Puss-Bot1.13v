const fs = require('fs');
const Discord = require('discord.js');

const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents });

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//komandas file kurus paņem no commands mapes un pārbauda vai tie beidzas ar .js
const {prefix, token} = require('./config.json');


//mogoose



for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
	console.log(client.commands)
}
client.on("message", (msg) => {
	if(!msg.content.startsWith(prefix)){
		return
	}
	const command = client.command.get(command.name, command)
	console.log(command)
	if(!command){
		return
	}
	try{
		command.execute(message)
	} catch(error){
		console.log(error)
		message.channel.send('Error acurred while getin comand')
	}

})

/*client.on('messageCreate', message => {
	if (!message.content.startsWith(prefix)) return;

	const command = client.commands.get(message.name, command);
	console.log(command)

	if (!command) return;
	console.log(command)

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});*/






console.log("Bot is on...");
client.login(token);