import React from "react";
import "./Board.css";

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={(ev) => this.props.onClick(ev, i)}
        winner={this.props.winningLines.includes(i)}
        isLast={this.props.isLast === i}
      />
    );
  }

  render() {
    let z = 0;
    let parent = [];

    for (let i = 0; i < 3; i++) {
      let child = [];
      for (let j = 0; j < 3; j++) {
        child.push(this.renderSquare(z++));
      }
      parent.push(
        <div className="board-row">
          {child}
        </div>
      );
    }

    return (parent);
  }
}

function Square(props) {
  let highlightClass = '';
  let focusedClass = '';

  if (props.winner) {
    highlightClass = " highlight ";
  }
  if (props.isLast) {
    focusedClass = ' square-bold '
  }
  return (
    <button className={'square' + highlightClass + focusedClass} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Board;
