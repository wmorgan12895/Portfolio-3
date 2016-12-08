var express = require("express")
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
var cookieParser = require('cookie-parser');
var app = express()
const bodyParser= require('body-parser')

app.use(express.static('static'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.post('/login', function(req, res) {
db.collection('users').findOne({email: req.body['email']}, function(err, document){
      if(document == null) {
          db.collection('users').save(req.body, function (err, result) {
          if (err) return console.log(err)
          console.log('saved to database')
          res.cookie('email' , req.body['email'])
          res.send({ code: '300' })
        })
      } 
      else if(err){

      }
      else {
        if(document.password == req.body['password']){
          res.cookie('email' , req.body['email'])
          res.send({ code: '200' })
          console.log("correct login")
        }else{
          res.send({ code: '100' })
          console.log("incorrect login")
        }
      }
  })
})

app.get('/', (req, res) => {
  res.cookie('email', '')
  res.sendFile(__dirname + '/login.html')
})

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/viewRecipes', (req, res) => {
  req.body['email'] = req.cookies['email'];
  if(req.cookies['email']!=""){
    db.collection('recipes').find({email: req.body['email']}).toArray(function(err, results) {
      if (err) return console.log(err);
      else {
        res.render('viewRecipes.ejs', {recipes: results});
      }
    })
  }
})

app.post('/save', function(req, res) {
  req.body['email'] = req.cookies['email'];
  db.collection('recipes').save(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.send();
  })
})

var db;
MongoClient.connect('mongodb://se319:password@ds119718.mlab.com:19718/se319', function(err, database) {
  if (err) return console.log(err)
  db = database
  app.listen(8081, () => {
    console.log('listening on 8081')
  })
})