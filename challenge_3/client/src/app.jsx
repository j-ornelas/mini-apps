import React from 'react';
import ReactDOM  from 'react-dom';
import Board from './modules/board.jsx';
import ScoreBoard from './modules/scoreBoard.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      playerOne: "Red",
      playerTwo: "Black",
      redTurn: true,
      redWins: 0,
      blackWins: 0,
      // 0 is empty, 1 is red, 2 is black
      board: [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]]
    }
  }


  setNames(){
    var player1 = prompt('player one name?');
    this.setState({playerOne:player1});
    var player2 = prompt('player two name?');
    this.setState({playerTwo:player2});
  }

  clearBoard(){
    this.setState({board:
           [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]]})

    $('.square').removeClass('red_circle');
    $('.square').removeClass('black_circle');
  }

  hasRowWinner(board){
    for (var i = 0; i < board.length; i++) {
      var rowString = "";
      for (var j = 0; j < board[i].length; j++){
        rowString += board[i][j]
      }
      if (rowString.includes('1111')){
        this.setState({redWins: this.state.redWins + 1})
        alert('Player One Wins!')
        this.clearBoard()
      } else if (rowString.includes('2222')){
        this.setState({blackWins: this.state.blackWins + 1})
        alert('Player Two Wins!')
        this.clearBoard()
      }
      rowString = "";
    }
  }

  hasColWinner(board){
    var board = this.state.board;
    var col1 = [board[0][0], board[1][0], board[2][0], board[3][0], board[4][0], board[5][0]];
    var col2 = [board[0][1], board[1][1], board[2][1], board[3][1], board[4][1], board[5][1]];
    var col3 = [board[0][2], board[1][2], board[2][2], board[3][2], board[4][2], board[5][2]];
    var col4 = [board[0][3], board[1][3], board[2][3], board[3][3], board[4][3], board[5][3]];
    var col5 = [board[0][4], board[1][4], board[2][4], board[3][4], board[4][4], board[5][4]];
    var col6 = [board[0][5], board[1][5], board[2][5], board[3][5], board[4][5], board[5][5]];
    var col7 = [board[0][6], board[1][6], board[2][6], board[3][6], board[4][6], board[5][6]];
    var cols = [col1, col2, col3, col4, col5, col6, col7]
    this.hasRowWinner(cols);
  }

  hasVertWinner(board){
    var board = this.state.board;
    var vert1 = [board[2][0], board[3][1], board[4][2], board[5][3]]
    var vert2 = [board[1][0], board[2][1], board[3][2], board[4][3], board[5][4]]
    var vert3 = [board[0][0], board[1][1], board[2][2], board[3][3], board[4][4],board[5][5]];
    var vert4 = [board[0][1], board[1][2], board[2][3], board[3][4], board[4][5], board[5][6]];
    var vert5 = [board[0][2], board[1][3], board[2][4], board[3][5],board[4][6]];
    var vert6 = [board[0][3], board[1][4], board[2][5], board[3][6]];
    var vert7 = [board[2][6], board[3][5], board[4][4], board[5][3]];
    var vert8 = [board[1][6], board[2][5], board[3][4], board[4][3], board[5][2]];
    var vert9 = [board[0][6], board[1][5], board[2][4], board[3][3], board[4][2], board[5][1]];
    var vert10 = [board[0][5], board[1][4], board[2][3], board[3][2], board[4][1], board[5][0]];
    var vert11 = [board[0][4], board[1][3], board[2][2], board[3][1], board[4][0]];
    var vert12 = [board[0][3], board[1][2], board[2][1], board[3][0]];
    var verts = [vert1, vert2, vert3, vert4, vert5, vert6, vert7, vert8, vert9, vert10, vert11, vert12]
    this.hasRowWinner(verts)
  }

  addColor(){
    if (this.state.redTurn === true) {
      return "red_circle"
    } else {
      return "black_circle"
    }
  }

  endTurn(){
    if (this.state.redTurn){
      this.setState({redTurn: false})
    } else{
      this.setState({redTurn: true})
    }
    this.hasVertWinner(this.state.board)
    this.hasColWinner(this.state.board)
    this.hasRowWinner(this.state.board)
  }

  insertIntoColumn(index) {
    let board = this.state.board;
    let placed = false;
    let color = this.addColor()

    for (var i = 0; i < board.length; i++) {
      if (board[0][index] !== 0){
        alert('this column is filled')
        return;
      }
      if (board[i][index] === 0){
        continue;
      } else if (board[i][index] !== 0) {
        if (this.state.redTurn === true){
          board[i-1][index] = 1;
          placed = true;
          $('.' + (i-1) + '-' + index).addClass("red_circle")
          this.endTurn()
          return;
        } else if (this.state.redTurn === false){
          board[i-1][index] = 2;
          placed = true;
          $('.' + (i-1) + '-' + index).addClass("black_circle")
          this.endTurn()
          return;
        }
      }
    }
    if (!placed){
      // board[5][index] = 1 or 2
      if (this.state.redTurn){
        board[5][index] = 1
        $('.' + 5 + '-' + index).addClass("red_circle")
        this.endTurn()
      } else {
        board[5][index] = 2
        $('.' + 5 + '-' + index).addClass("black_circle")
        this.endTurn()
      }
    }
    // this.setState({board: board})
  }

  handleClick(column) {
    //insert into column here
    this.insertIntoColumn(column)
    console.log(this.state.redTurn)
  }

  render() {
    return (

      <div>
        <ScoreBoard playerOne={this.state.playerOne} playerTwo={this.state.playerTwo} setNames={this.setNames.bind(this)} redWins={this.state.redWins} blackWins={this.state.blackWins}/>
        <Board handleClick={this.handleClick.bind(this)}/>
        <button className="clear" onClick={this.clearBoard.bind(this)}>Clear Board</button>
      </div>

    );




  }


}

ReactDOM.render(<App />, document.getElementById('root'));
