import React from 'react';
import ReactDOM from 'react-dom';

export default function ButtonSelect (props){
  return (
    <div>
      <button onClick={props.selectButton.bind(this, props.currentRound, 1)}className="select">1</button>
      <button onClick={props.selectButton.bind(this, props.currentRound, 2)}className="select">2</button>
      <button onClick={props.selectButton.bind(this, props.currentRound, 3)}className="select">3</button>
      <button onClick={props.selectButton.bind(this, props.currentRound, 4)}className="select">4</button>
      <button onClick={props.selectButton.bind(this, props.currentRound, 5)}className="select">5</button>
      <br />
      <button onClick={props.selectButton.bind(this, props.currentRound, 6)}className="select">6</button>
      <button onClick={props.selectButton.bind(this, props.currentRound, 7)}className="select">7</button>
      <button onClick={props.selectButton.bind(this, props.currentRound, 8)}className="select">8</button>
      <button onClick={props.selectButton.bind(this, props.currentRound, 9)}className="select">9</button>
      <button onClick={props.selectButton.bind(this, props.currentRound, 10)}className="select">10</button>
    </div>

  )

}
