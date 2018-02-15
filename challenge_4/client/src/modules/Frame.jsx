import React from 'react';
import ReactDOM from 'react-dom';

export default function ScoreBoard (props) {

    return (
      <td>{props.score[0]} - {props.score[1]}</td>
    )
}
