const EventEmitter = require('events')
class Logger extends EventEmitter{
    log(){
        console.log('helloo world');
        this.emit('hw',[1,2,3,4,5])
    }

}
module.exports=Logger