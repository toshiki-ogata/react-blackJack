import React from 'react';
import Player from './Player';
import Dealer from './Dealer';
import Deck from './Deck';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Deck />
        <Player />
        <Dealer />
      </div>
    );
  }
}

export default Game
