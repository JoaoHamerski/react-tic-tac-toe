import classNames from 'classnames';
import React from 'react';

function Square(props) {
    return (
      <div className={classNames(['square', props.isSquareWinner && 'text-success'])} 
        current-player={props.currentPlayer}
        onClick={ props.onClick }>
        { props.value }
      </div>
    );
}

export default Square;