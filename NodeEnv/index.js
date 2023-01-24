const express = require('express')
const morgan = require('morgan')
const config = require('config')
const app = express()

console.log('node env method '+process.env.NODE_ENV)
console.log('app method '+app.get('env'))

console.log(config.get('name')+'\n'+config.get('mail.host')+'\n'+config.get('mail.pwd'))

const env=app.get('env')
if(env==='development'){
    console.log('MORGAN ENABLED');
    app.use(morgan('tiny'))
}


app.use(express.json())
app.get('',(req,res)=>{
    res.send('home page content')
})
app.get('/hello',(req,res)=>{
    res.send('Http Web server says hello')
})
const port = process.env.port || 5000

app.listen(port,()=>console.log(`web server lsitening on port ${port}`))