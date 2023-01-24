const EventEmitter = require('events')


class Logger extends EventEmitter{
    log=(message)=>{
        console.log(message)
        this.emit('log1',"message successfully logged")
    }
}


module.exports.Logger = Logger
