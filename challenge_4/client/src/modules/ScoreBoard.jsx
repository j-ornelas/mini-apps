import React from 'react';
import ReactDOM from 'react-dom';
import Frame from './Frame.jsx'


export default function ScoreBoard (props) {

    return (
      <div>This is the scoreboard
      <table>
      <tbody>
       <tr>
          <Frame score={props.rounds[0]} className="0" />
          <Frame score={props.rounds[1]} className="1" />
          <Frame score={props.rounds[2]} className="2" />
          <Frame score={props.rounds[3]} className="3" />
          <Frame score={props.rounds[4]} className="4" />
          <Frame score={props.rounds[5]} className="5" />
          <Frame score={props.rounds[6]} className="6" />
          <Frame score={props.rounds[7]} className="7" />
          <Frame score={props.rounds[8]} className="8" />
          <Frame score={props.rounds[9]} className="9" />
        </tr>
      </tbody>
      </table>
      </div>
    )

}
