
// ========== Browser Memory ==========
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

var wins = {
  "X": 0,
  "O": 0
}

//========== Helper Functions ==========

var updateTurn = function() {
  element = document.getElementsByClassName("turn")[0]
  if (xTurn){
    element.innerHTML = "X"
  } else {
    element.innerHTML = "O"
  }
}

var updateScoreboard = function(winner, className){
  var element = document.getElementsByClassName(className)[0];
  var count = wins[winner]
  element.innerHTML = "<strong>" + winner + ":</strong> " + count + " wins";
}

var checkForTie = function(board){
  if (JSON.stringify(board).indexOf('0') === -1){
    clearBoard();
    alert('The game was a tie!')
  }
}

var xWins = function(){
  wins["X"] += 1;
  clearBoard();
  updateScoreboard('X', 'xPlayer');
  alert('X has won the game!')
}

var oWins = function(){
  wins["O"] += 1;
  clearBoard();
  updateScoreboard('O', 'oPlayer');
  alert('O has won the game!');
  xTurn = false;
}

var clearBoard = function(){
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
}

//========== GAME WINNING LOGIC ==========
// we can probably turn this into an object of some kind
//and make it way prettier.
var checkForWinner = function(board){
  var vert1 = JSON.stringify([board[0][0], board[1][0], board[2][0]]);
  var vert2 = JSON.stringify([board[0][1], board[1][1], board[2][1]]);
  var vert3 = JSON.stringify([board[0][2], board[1][2], board[2][2]]);
  var cross1 = JSON.stringify([board[0][2], board[1][1], board[2][0]]);
  var cross2 = JSON.stringify([board[0][0], board[1][1], board[2][2]]);

  if (JSON.stringify(board[0]) === "[1,1,1]"){
    xWins();
  } else if (JSON.stringify(board[0]) === "[2,2,2]"){
    oWins();
  } else if (JSON.stringify(board[1]) === "[1,1,1]"){
    xWins();
  } else if (JSON.stringify(board[1]) === "[2,2,2]"){
    oWins();
  } else if (JSON.stringify(board[2]) === "[1,1,1]"){
    xWins();
  } else if (JSON.stringify(board[2]) === "[2,2,2]"){
    oWins();
  } else if (vert1 === "[1,1,1]"){
    xWins();
  } else if (vert1 === "[2,2,2]"){
    oWins();
  } else if (vert2 === "[1,1,1]"){
    xWins();
  } else if (vert2 === "[2,2,2]"){
    oWins();
  } else if (vert3 === "[1,1,1]"){
    xWins();
  } else if (vert3 === "[2,2,2]"){
    oWins();
  } else if (cross1 === "[1,1,1]"){
    xWins();
  } else if (cross1 === "[2,2,2]"){
    oWins()
  } else if (cross2 === "[1,1,1]"){
    xWins();
  } else if (cross2 === "[2,2,2]"){
    oWins();
  }
}

// ========== Refresh Button ===========
document.getElementsByClassName('refresh')[0].addEventListener('click', function(){
  clearBoard();
})

//========== Event Listeners ==========

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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
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
  checkForTie(board);
  checkForWinner(board);
  updateTurn();
});
