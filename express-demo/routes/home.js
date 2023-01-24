const express = require('express')
const pug = require('pug')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send(pug.renderFile('./views/pugResponse.pug',{title : "My Express App" , message : "Tempating engine using pug"}))
})

module.exports = router