
module.exports = {
    name: 'hello',
    descriton: 'sipmle hello',

    execute(message, args){
        message.channel.replay('It accully worked')
    }
}