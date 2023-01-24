const courseRouter = require('./routes/courses')
const homeRouter = require('./routes/home')
const morgan = require('morgan')
const express = require('express')
const app = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api',courseRouter)
app.use('/',homeRouter)


const def_port=5000
const port = def_port || 5000
app.listen(port,()=>console.log(`listening on port ${port}`))