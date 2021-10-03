const {botName, botDesc, executed} = require('../config.json');
const {version} = require('../package.json');
const {MessageEmbed} = require('discord.js');


module.exports = {
    name: 'botinfo',
    description: 'returns embed bot info',
    

    execute(message, args){
        const embed = new MessageEmbed()
         .setAuthor('Developed by: JanKa#7069')
         .setThumbnail('https://cdn.discordapp.com/attachments/775274582961029130/860262034922537050/20200707_151624.jpg')//bilde
         .setTitle(`Name: ${botName}`)
         .setColor('#FF69B4')//Maliņas krāsa
         .setDescription(`${botDesc}`)//Vidus/apraksts
         .setFooter(`${version}`)//apakša
         //.addField('field1', 'hey wsup mate', true)//Neliels virsraksts + apakšraksts
    
           
        
        message.channel.send({embeds: [embed]});
        console.log(`${executed}`)
    }
    

}