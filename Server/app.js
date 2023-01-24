const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())  
app.get('/',(req,res)=>{
    //res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.send({'name':'sathya'})
})
const port = 3000
app.listen(port,()=>console.log(`listening to port ${port}`))