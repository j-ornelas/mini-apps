import React from 'react';
import ReactDOM  from 'react-dom';

export default function Board (props) {

    return (
    <div>
      <div>
        <button className="col1" onClick={props.handleClick.bind(this, 0)}>click</button>
        <button className="col2" onClick={props.handleClick.bind(this, 1)}>click</button>
        <button className="col3" onClick={props.handleClick.bind(this, 2)}>click</button>
        <button className="col4" onClick={props.handleClick.bind(this, 3)}>click</button>
        <button className="col5" onClick={props.handleClick.bind(this, 4)}>click</button>
        <button className="col6" onClick={props.handleClick.bind(this, 5)}>click</button>
        <button className="col7" onClick={props.handleClick.bind(this, 6)}>click</button>

      </div>
      <table>
       <tbody>
        <tr className="row_one">
          <td className="0-0 square"></td><td className="0-1 square"></td><td className="0-2 square"></td><td className="0-3 square"></td><td className="0-4 square"></td><td className="0-5 square"></td><td className="0-6 square"></td>
        </tr>
        <tr className="row_two">
          <td className="1-0 square"></td><td className="1-1 square"></td><td className="1-2 square"></td><td className="1-3 square"></td><td className="1-4 square"></td><td className="1-5 square"></td><td className="1-6 square"></td>
        </tr>
        <tr className="row_three">
          <td className="2-0 square"></td><td className="2-1 square"></td><td className="2-2 square"></td><td className="2-3 square"></td><td className="2-4 square"></td><td className="2-5 square"></td><td className="2-6 square"></td>
        </tr>
        <tr className="row_four">
          <td className="3-0 square"></td><td className="3-1 square"></td><td className="3-2 square"></td><td className="3-3 square"></td><td className="3-4 square"></td><td className="3-5 square"></td><td className="3-6 square"></td>
        </tr>
        <tr className="row_five">
          <td className="4-0 square"></td><td className="4-1 square"></td><td className="4-2 square"></td><td className="4-3 square"></td><td className="4-4 square"></td><td className="4-5 square"></td><td className="4-6 square"></td>
        </tr>
        <tr className="row_six">
          <td className="5-0 square"></td><td className="5-1 square"></td><td className="5-2 square"></td><td className="5-3 square"></td><td className="5-4 square"></td><td className="5-5 square"></td><td className="5-6 square"></td>
        </tr>
       </tbody>
      </table>
    </div>
    )

}
