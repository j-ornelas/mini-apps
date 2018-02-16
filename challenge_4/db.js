const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('MONGO IS CONNECTED')
})

var schema = new mongoose.Schema({
  name: String,
  score: Array
})

var Score = db.model('Score', schema)

module.exports.Score = Score;
//
// var Kitten = mongoose.model('Kitten', kittySchema);
//
// var silence = new Kitten({name: 'Silence'});

//
// silence.save(function (err, fluffy) {
//    if (err) return console.error(err);
//  });
//
//  Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })

// module.exports = Schema;
