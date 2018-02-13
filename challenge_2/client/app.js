var test = 'working'


var handleSubmit = function(input){

  $.ajax({
    url: 'http://127.0.0.1:8080/',
    type: 'POST',
    data: input,
    contentType: 'json',
    success: function(data) {
      console.log(data);
    },
    error: function (data) {
      console.error('failed');
    }
  });



}

//==========JQUERY CLICK EVENTS==========
$( document ).ready(function() {

  $('form').on('submit', function(event){
    var data = JSON.stringify($('.field').val());
    handleSubmit(data);
    event.preventDefault();
  })


});
