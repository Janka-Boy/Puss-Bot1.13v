const {MessageEmbed} = require('discord.js');
const executed = require('../config.json');


module.exports = {
    name: 'help',
    destcription : 'this is test',
    execute(message, args){
        const embed = new MessageEmbed()
         .setColor('#DC0360')
         .setAuthor('Puss† Bot')
         .setThumbnail('https://cdn.discordapp.com/attachments/775274582961029130/860262034922537050/20200707_151624.jpg')
         .setTitle("Prefix is: `1`")
         .addFields(
             {name : 'Info', value : '`userinfo, botinfo, guildinfo`'},
             {name : 'Fun', value : '`memes`'}
         )
          
        message.channel.send({embeds: [embed]})
        console.log(executed)
    }
}
