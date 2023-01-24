const http = require('http')
const server  = http.createServer((req,res)=>{
    if(req.url=='/'){
    res.write('Hello')
    res.end()
    }
    if(req.url('/sathya')){
        res.write('World')
        res.end()
    }
})
server.on('connection',()=>console.log('New Connection ...'))
server.listen(3001);