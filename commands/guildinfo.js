const {executed} = require('../config.json');
const {MessageEmbed} = require('discord.js');
module.exports = {
    name : 'guildinfo',
    description : 'discord guild info',

    execute(message){
        const guild = message.guild
        const guildName = guild.name
        const guildCreated = new Date(message.guild.createdTimestamp).toLocaleDateString('en-GB')



        
        const memberNumber = guild.memberCount
        const guildOwner = guild.ownerId
        const embedGuild = new MessageEmbed()
         .setColor('#5122C4')
         .setAuthor(`Guild name: ${guildName}`)
         .addFields(
             {name : 'Guild owner', value : `<@${guildOwner}>`},
             {name : 'Created at', value : `${guildCreated}`},
             {name : 'Members', value : `${memberNumber}`}
         )
         

        
        message.channel.send({embeds: [embedGuild]})
        //setTimeout(function(){message.channel.send('test')}, 2000) Maybe will be usefull in future
        console.log(`${executed}`)


    }
}