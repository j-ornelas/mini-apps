//==========AJAX REQUEST FUNCTION ==========
var handleSubmit = function(input){
  $.ajax({
    url: 'http://127.0.0.1:8080/',
    method: 'POST',
    data: {input},
    success: function(data) {
      insertIntoPage(data);
      $('.field').val("")
    },
    error: function (data) {
      console.error('failed');
    }
  });
}
//========Add data from server onto page=======
var insertIntoPage = function(input){
  $('.output').prepend('<p>' + input + '</p>')
}

//==========JQUERY CLICK EVENTS==========
$( document ).ready(function() {
  $('form').on('submit', function(event){
    event.preventDefault();
    handleSubmit($('.field').val());
  })
});
