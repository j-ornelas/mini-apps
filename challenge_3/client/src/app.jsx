import React from 'react';
import ReactDOM  from 'react-dom';

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
      </div>

    );




  }


}

ReactDOM.render(<App />, document.getElementById('root'));
