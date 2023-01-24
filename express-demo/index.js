const homeRouter = require('./routes/home')
const courseRouter = require('./routes/courses')
const paramRouter = require('./routes/param')

const config = require('config')
const express = require('express')
const morgan = require('morgan')
const middleware = require('./mw')
const app = express()
app.use(express.json())
app.use(middleware.mv1)
app.use(middleware.mv2)
app.use(express.static('public'))
app.use(morgan('tiny'))
app.use('/',homeRouter)
app.use('/api/courses',courseRouter)
app.use('/page1/:name/:class',paramRouter)

/* console.log('node env :',app.get('env'))
console.log('application name :',config.get('name'))
let sec= config.get('mail.PWD')
console.log('mail server :',sec) */
const def_port = 5001;


const port = process.env.PORT || def_port;
app.listen(port,()=>console.log(`listening on port ${port}`))