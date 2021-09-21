const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents });




client.once('ready', () => {
	console.log('Bot is on...');
});
client.on("messageCreate", (msg) => {
	if(msg.content === 'ping'){
		msg.channel.send('itworks')
	}
})

client.login(config.token);