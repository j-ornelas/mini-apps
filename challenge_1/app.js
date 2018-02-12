var xTurn = true;
// first turn will be x
// if xturn is false, throw 'o' instead of 'x'
// if x turn is true, place x on square.
// if square is taken, throw alert


document.getElementsByClassName('one')[0].addEventListener('click', function () {
  console.log("Testing123");
  var element = document.getElementsByClassName('one')[0];
  element.innerHTML = "X"
  console.log(element)
});

document.getElementsByClassName('refresh')[0].addEventListener('click', function(){
  // loop through all 'square' classes
  // set inner html to an empty string
  // set xturn to true
  var squares = document.getElementsByClassName('square')
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = ""
    };
  xTurn = true;
  console.log(squares);
})
