module.exports = {
    name : 'help',
    descriton: 'simple bot description',
    
    execute(message, args){
        console.log('command got executed')
        message.channel.send('hello')
    }
}