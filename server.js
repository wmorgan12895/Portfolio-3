var express = require("express")

var app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(8081, () => {
    console.log('listening on 8081')
})