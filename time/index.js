
var express = require('express');
const timestamp = require('unix-timestamp')
var app = express();


app.get("/api/:date?",(req,res)=>{
  if(!req.params.date){
    let date=new Date()
    let d=date.getDate()
    let m=date.getMonth()
    if(d<10)
    d='0'+d.toString()
    if(m<10)
    m='0'+m.toString()
    d=d.toString()
    m=m.toString()
    let unix_str = date.getFullYear()+'-'+m+'-'+d
    console.log(unix_str)
    date=date.toUTCString()
    res.send({"unix": Date.parse(date),"utc" : date})
    res.end()
    return;
  }
  else{
    let unix = req.params.date
    if(isNaN(unix)==false){
      unix = parseInt(unix)
    let utc = new Date(parseInt(unix))
    utc = utc.toUTCString()
    res.send({unix , utc})
    res.end()
    return;
    }
    else{
      const date = new Date(req.params.date)
      if(date!="Invalid Date"){
      let unix = Date.parse(date)
      unix = parseInt(unix)
      const utc = date.toUTCString()
      res.send({unix  , utc  })
      res.end()
      return;
      }
      else{
        res.send({error : "Invalid Date"})
        res.end()
        return;
      }
    }
  
  }
})
app.listen(3000,()=>console.log('listening on port 3000'))
