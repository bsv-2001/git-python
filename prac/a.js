const Logger=require('./b')
const Log = new Logger()
Log.on('hw',(res)=>{
    console.log('successfully logged hello world to the console\nprinting result',res);
})
Log.log()