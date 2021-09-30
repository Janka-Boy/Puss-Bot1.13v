module.exports = {
    name : 'help',
    descriton: 'simple bot description',
    
    async execute(message){
        console.log('command got executed')
        message.channel.send('hello')
    }
}