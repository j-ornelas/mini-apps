var handleData = function(data) {
  var keys = [];
  var users = [];
  var csv = [['COPY AND PASTE THE TEXT BELOW INTO YOUR CSV EDITOR'], ["\n"],keys]

  // get an array of our keys
  for (var key in data) {
    keys.push(key)
  }

  //pushes a single user into users array
  var makeSingleUser = function(obj) {
    var temp = [];
    for (var key in obj) {
      if (key === "children"){
        continue;
      } else {
        temp.push(obj[key])
      }
    }
    users.push(temp)
  };


  // makeSingleUser(testData)

  // recurse through testData and add each object into users
  var recurse = function(data) {
    // allUsers = [];
    makeSingleUser(data)
    for (var i = 0; i < data.children.length; i++) {
      recurse(data.children[i])
    }
  }

  recurse(data)

  //push each user into csv
  for (var i = 0; i < users.length; i++) {
    csv.push(users[i])
  }

  //remove 'children' from keys array
  csv[2] = csv[2].slice(0, keys.length-1);

  // console.log(csv.join("\n"))
  return csv.join("<br />");
}

// handleData(testData);


//==========AJAX REQUEST FUNCTION ==========

var handleSubmit = function(input){
  $.ajax({
    url: 'http://127.0.0.1:8080/',
    method: 'POST',
    data: {input},
    success: function(data) {
      var csvObj = handleData(data)
      insertIntoPage(csvObj);
      $('.field').val("")
      // alert(csvObj);



    },
    error: function (data) {
      console.error('failed');
    }
  });
}

var insertIntoPage = function(input){
  $('.output').prepend('<p>' + input + '</p>')
}


//==========JQUERY CLICK EVENTS==========
$( document ).ready(function() {

  $('form').on('submit', function(event){
    var input = $('.field').val();
    handleSubmit(input);
    event.preventDefault();
  })





});
