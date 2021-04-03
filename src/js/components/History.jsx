import React from 'react';

function History(props) {
  return (
    <div className="game-history">
      <ul>
        {
          props.history.map((square, move) => (
            <li key={move} className={move == props.currentMove ? 'current-move' : undefined}>
              <a href="/"
                onClick={(e) => props.jumpTo(e, move)}
              >
              {
                move === 0 
                  ? 'Jogada inicial'
                  : move === props.history.length - 1 && props.finished
                    ? 'Jogada final'
                    : 'Jogada ' + move
              }
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default History;