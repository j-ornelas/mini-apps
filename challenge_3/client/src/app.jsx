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
    this.setState({board:[[0,0,0,0,0,0,0],
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
        <button onClick={this.clearBoard.bind(this)}>Clear Board</button>
      </div>

    );




  }


}

ReactDOM.render(<App />, document.getElementById('root'));
