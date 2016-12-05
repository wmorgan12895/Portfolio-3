var express = require("express")

var app = express()

app.use(express.static('static'));


app.post('/login', function(req, res){
//   db.collection('users').findOne({email: req.body['email']}, function(err, document){
//       if(document == null) {
//           db.collection('users').save(req.body, (err, result) => {
//           if (err) return console.log(err)
//           console.log('saved to database')
//           res.cookie('email' , req.body['email'])
//           res.send({ code: '300' })
//         })
//       } 
//       else if(err){

//       }
//       else {
//         if(document.password == req.body['password']){
//           res.cookie('email' , req.body['email'])
//           res.send({ code: '200' })
//           console.log("correct login")
//         }else{
//           res.send({ code: '100' })
//           console.log("incorrect login")
//         }
//       }
  //})
  res.send({ code: '200' })
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html')
})

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(8081, () => {
    console.log('listening on 8081')
})