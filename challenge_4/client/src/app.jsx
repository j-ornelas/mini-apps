import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoard from './modules/ScoreBoard.jsx';
import Frame from './modules/Frame.jsx';
import ButtonSelect from './modules/ButtonSelect.jsx'

var _ = require('lodash');

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentRound: 0,
      round1: true,
      rounds: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
      total: 0
    }
  }

  switchRound(){
    if (this.state.round1){
      this.setState({round1: false})
    } else {
      this.setState({round1: true})
    }
  }
  calculateTotal(){
    // var total = this.state.round0 + this.state.round1 + this.state.round2 + this.state.round3 +
    // this.state.round4 + this.state.round5 + this.state.round6 + this.state.round7 +
    // this.state.round8 + this.state.round9
    var flattened = _.flatten(this.state.rounds);
    var total = _.reduce(flattened, function(sum, n) {
      return sum + n;
    });
    this.setState({total:total})
    console.log('clicked')
  }

  clearBoard(){
    this.setState({
      total:0,
      currentRound: 0,
      rounds: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
    })
  }

  selectButton(index, number){
    var round;
    if (this.state.round1){
      round = 0;
    } else {
      round = 1;
    }

    if (this.state.currentRound === 10){
      this.clearBoard()
      return;
    }

    var rounds = this.state.rounds
    rounds[index][round] = number
    this.setState({rounds:rounds})
    if (!this.state.round1){
      this.setState({currentRound: this.state.currentRound + 1})
    }
    this.switchRound();
    this.calculateTotal();
  }

  render() {
    return (
      <div>

        <ButtonSelect currentRound={this.state.currentRound} rounds={this.state.rounds} selectButton={this.selectButton.bind(this)} />
        <ScoreBoard rounds={this.state.rounds} calculateTotal={this.calculateTotal.bind(this)} />
        <p>Total Score:</p>
        <div className="total">{this.state.total}</div>

      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));
