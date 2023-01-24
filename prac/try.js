const LoggerEmitterClass= require('./cEmit')
const lgc = new LoggerEmitterClass()

lgc.on('step1',(msg)=>{
    console.log(msg+'listener activated')
})
lgc.on('step2',(msg)=>{
    console.log(msg+'listener activated')
})
lgc.on('step3',(msg)=>{
    console.log(msg+'listener activated')
})

lgc.Log('step1')
lgc.Log('step3')
lgc.Log('step2')