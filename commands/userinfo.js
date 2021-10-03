const {executed} = require('../config.json');
const {MessageEmbed} = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: 'returns user info',
    
    execute (message){
        const {guild, channel} = message
        const user = message.author
        const memberImage = message.author.avatarURL()
        const member = guild.members.cache.get(user.id)
        //Laiks:
        const joinedGuild = new Date(member.joinedTimestamp).toLocaleDateString('en-GB')
        const joinedDiscord = new Date(user.createdTimestamp).toLocaleDateString('en-GB')


        const userInfo = new MessageEmbed()
         .setColor('#FF69B4')
         .setTitle('Name: '+message.author.username)
         .setThumbnail(memberImage)
         .addField('Joined guild at:', joinedGuild)
         .addField('Discord user since:', joinedDiscord,)
        message.channel.send({embeds: [userInfo]})
        console.log(executed)
    }
    
};