const EventEmitter = require('events')
class Logger extends EventEmitter{
    Log=(msg)=>{
        if(msg==='step1')
            this.emit(msg,msg)
        else if(msg==='step2')
            this.emit(msg,msg)
        else
            this.emit(msg,msg)
    }
}
module.exports=Logger