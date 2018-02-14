var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var handleData = require('./client/handleData.js');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('client'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.post('/', function( req, res ) {
  res.send(handleData.handleData(JSON.parse(req.body.input)));
})

app.listen(8080, () => console.log('server running on port 8080'));
