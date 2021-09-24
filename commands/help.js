module.exports = {
    name: 'help',
    descriton: 'simple bot description',
    
    execute(message){
        console.log('command got executed')
        message.channel.send('hello')
    }
}