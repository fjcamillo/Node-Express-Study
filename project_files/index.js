var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.send('Hello World!')
})

app.get('/yo', function(req, res){
  res.send("Yo!")
})

let server = app.listen(3000, function(){
  console.log("server running at http://localhost:"+server.address().port)
})
