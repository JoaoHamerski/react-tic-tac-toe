import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import Square from './Square';

function Board(props) {
  function renderSquare(i) {
    return (
      <Square
        isSquareWinner={props.result.lines && props.result.lines.includes(i)}
        currentPlayer={(! props.squares[i] && ! props.finished) ? props.currentPlayer : undefined}
        value={props.squares[i]}
        onClick={() => {props.onClick(i)}}
      />
    )
  }

  return (
    <div className={classNames('board', {'finished': props.finished})}>
      <div className="row">
        { renderSquare(0) }
        { renderSquare(1) }
        { renderSquare(2) }
      </div>

      <div className="row">
        { renderSquare(3) }
        { renderSquare(4) }
        { renderSquare(5) }
      </div>

      <div className="row">
        { renderSquare(6) }
        { renderSquare(7) }
        { renderSquare(8) }
      </div>
    </div>
  );
}

export default Board;