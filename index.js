const fs = require('fs');
const Discord = require('discord.js');

const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents });

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//komandas file kurus paņem no commands mapes un pārbauda vai tie beidzas ar .js
const {prefix, token} = require('./config.json');


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// command = no mapes commands faili kas biedzas ar .js
	
	client.commands.set(command.name, command);
};

client.on('messageCreate', message => {//kad klients strādā
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift()        //.toLowerCase(); I mean es izlēdzu jo man vajadzēja vienai komandai

	if (!client.commands.has(command)) return;
//error catching
	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('something went wrong, your trash at this');
	
	}
})

console.log("Bot is on...");
client.login(token)