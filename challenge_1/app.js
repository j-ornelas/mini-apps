var xTurn = true;
// first turn will be x
// if xturn is false, throw 'o' instead of 'x'
// if x turn is true, place x on square.
// if square is taken, throw alert

// 0 is empty, 1 is X, 2 is O
var board = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

// this is really long and gross and can probably be fixed
document.getElementsByClassName('one')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('one')[0];
  if (board[0][0] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[0][0] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[0][0] = 2
    xTurn = true;
    console.log('O placed!')
  }
});

document.getElementsByClassName('two')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('two')[0];
  if (board[0][1] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[0][1] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[0][1] = 2
    xTurn = true
    console.log('O placed!')
  }
});

document.getElementsByClassName('three')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('three')[0];
  if (board[0][2] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[0][2] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[0][2] = 2
    xTurn = true
    console.log('O placed!')
  }
});

document.getElementsByClassName('four')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('four')[0];
  if (board[1][0] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[1][0] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[1][0] = 2
    xTurn = true
    console.log('O placed!')
  }
});

document.getElementsByClassName('five')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('five')[0];
  if (board[1][1] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[1][1] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[1][1] = 2
    xTurn = true
    console.log('O placed!')
  }
});

document.getElementsByClassName('six')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('six')[0];
  if (board[1][2] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[1][2] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[1][2] = 2
    xTurn = true
    console.log('O placed!')
  }
});


document.getElementsByClassName('seven')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('seven')[0];
  if (board[2][0] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[2][0] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[2][0] = 2
    xTurn = true
    console.log('O placed!')
  }
});


document.getElementsByClassName('eight')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('eight')[0];
  if (board[2][1] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[2][1] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[2][1] = 2
    xTurn = true
    console.log('O placed!')
  }
});


document.getElementsByClassName('nine')[0].addEventListener('click', function () {
  var element = document.getElementsByClassName('nine')[0];
  if (board[2][2] !== 0){
    alert('This space is taken!')
  } else if (xTurn) {
    element.innerHTML = "X"
    board[2][2] = 1
    xTurn = false;
    console.log('X placed!')
  } else {
    element.innerHTML = "O"
    board[2][2] = 2
    xTurn = true
    console.log('O placed!')
  }
});





document.getElementsByClassName('refresh')[0].addEventListener('click', function(){
  var squares = document.getElementsByClassName('square')
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerHTML = ""
    };
  xTurn = true;
  board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]
})
