import React from 'react';
import ReactDOM  from 'react-dom';
import Board from './modules/board.jsx'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      redTurn: true,
      // 0 is empty, 1 is red, 2 is black
      board: [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]]
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
        <h1>This is the App Component</h1>
        <Board handleClick={this.handleClick.bind(this)}/>
      </div>

    );




  }


}

ReactDOM.render(<App />, document.getElementById('root'));
