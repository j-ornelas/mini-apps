var test = 'working'


var handleSubmit = function(input){

  $.ajax({
    url: 'http://127.0.0.1:8080/',
    method: 'POST',
    // Content-Type: 'application/json',
    data: input,
    // contentType: false,
    success: function(data) {
      console.log('data', data);
    },
    error: function (data) {
      console.error('failed');
    }
  });



}

//==========JQUERY CLICK EVENTS==========
$( document ).ready(function() {

  $('form').on('submit', function(event){
    var input = JSON.stringify($('.field').val());
    console.log(input)
    handleSubmit(input);
    event.preventDefault();
  })


});
