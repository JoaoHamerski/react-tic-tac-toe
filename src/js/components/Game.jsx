import React, {useState, useMemo, useEffect} from 'react';
import Board from './Board';
import History from './History';
import Info from './Info';

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [currentMove, setCurrentMove] = useState(0);

  let current = history[currentMove];
  let result = calculateWinner(current.squares);

  function winnerState() {
    if (result.winner === null)
      return 0;

    if (result.winner === 'draw')
      return -1;

    if (result.winner)
      return 1;
  }

  function jumpTo(event, move) {
    event.preventDefault();

    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  function handleClick(i) {
    const _history = history.slice(0, currentMove + 1);
    let squares = current.squares.slice();

    if (result.winner || squares[i]) 
      return;

    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(_history.concat([{
      squares: squares
    }]));

    setXIsNext(! xIsNext);
    setCurrentMove(_history.length);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {winner: squares[a], lines: lines[i]};
      }
    }

    if (! squares.includes(null)) 
      return {winner: 'draw', lines: null};

    return {winner: null, lines: null};
  }

  return (
    <div className="wrapper">
      <div className="game-board">
        <Board 
          result={result}
          currentPlayer={xIsNext ? 'X' : 'O'}
          finished={!! result.winner}
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>

      <div className="game-info">
        <Info 
          winnerState={winnerState} 
          winner={result.winner} 
          xIsNext={xIsNext} 
        />

        <History 
          history={history} 
          finished={!! result.winner} 
          jumpTo={jumpTo} 
          currentMove={currentMove}
        />
      </div>
    </div>
  )
}

export default Game;