const path  = require('path')
const pathObject = path.parse(__filename)
console.log(pathObject);

const os = require('os')
console.log(os.totalmem())

const fs = require('fs')
fs.readFile('./text1.txt','utf-8',(err,result1)=>{
    fs.readFile('./text2.txt','utf-8',(err,result2)=>{
        console.log(result2);
    })
    console.log(result1);
})

const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('event1',()=>console.log('event 1 triggered'))
emitter.emit('event1')

const allExports = require('./2')
let externalClass =  new allExports.itemClass('20','10')
console.log(externalClass);

const commonClass = require('./commonEmitter')
const commonEmitter = new commonClass.Logger()


commonEmitter.on('log1',(res)=>console.log(res))
commonEmitter.log('happy')