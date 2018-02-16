var express = require('express');
var app = express();
var db = require('./db')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static('./client/dist'));

app.post('/', function(req, res){
  console.log(req.body)
  var dbRequest = new db.Score(req.body);
  dbRequest.save()
  res.json(req.body);
})

app.get('/scores', function(req, res){
  console.log('test2')
  db.Score.find({}, function(err, data){
    console.log("USERS", data)
    res.send(data)
  })
})

app.listen(3000, function(){
  console.log('app is running on port 3000!')
})
