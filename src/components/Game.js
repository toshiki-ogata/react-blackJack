import React from 'react';
import Player from './Player';
import Dealer from './Dealer';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'Player',
      result: null,
    };
  }

  changeTurn() {
    if(this.state.turn === 'Player') {
      this.setState({ turn: 'Dealer' });
    } else if(this.state.turn === 'Dealer') {
      this.setState({ turn: 'Player' });
    }
  }

  render() {
    return (
      <div className="game">
        <h2>ブラックジャック</h2>
        {/* <Deck /> */}
        <Player callback={() => this.changeTurn()} />
        <Dealer />
      </div>
    );
  }
}

export default Game
