import React from 'react';
import ReactDOM  from 'react-dom';

export default function ScoreBoard(props){
  return (
    <div>
      <button onClick={props.setNames}>Change Names</button>
      <div>{props.playerOne} : {props.redWins}</div>
      <div>{props.playerTwo} : {props.blackWins}</div>
      <br />
    </div>

  )
}
