import React from 'react';
import ReactDOM  from 'react-dom';
import Board from './modules/board.jsx'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      redTurn: true
    }
  }

  render() {
    return (

      <div>
        <h1>This is the App Component</h1>
        <Board />
      </div>

    );




  }


}

ReactDOM.render(<App />, document.getElementById('root'));
