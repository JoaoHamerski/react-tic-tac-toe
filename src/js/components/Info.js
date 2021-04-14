import classNames from 'classnames';
import React from 'react';

function Info(props) {

  function renderInfo(winnerState) {
    return (
      winnerState === -1 
        ? 'Empate!'
        : winnerState === 0
          ? 'Jogador'
          : 'Vencedor'
    );
  }

  return (
    <div>
      <div 
        className={classNames([
          'next-player', 
          props.winnerState() === 1 && 'text-success',
          props.winnerState() === -1 && 'text-danger'
          ])}
      >
        { renderInfo(props.winnerState()) }

        <div className="next-player-symbol">
          {props.winnerState() === 0 ? (props.xIsNext ? 'X' : 'O') : (props.winner !== 'draw' && props.winner)}
        </div>
      </div>
    </div>
  );
}

export default Info;