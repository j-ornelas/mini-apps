var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('./client/dist'))

// app.get('/', function(req, res) {
//   res.send('hello world')
// });

app.listen(3000, function(){
  console.log('server running on port 3000!')
})
