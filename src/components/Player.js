import React from 'react';
import Card from './Card';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hand: [],
      result: null,
    };
    hit();
  }

  hit() {
    // this.state.hand.push(pick());
    this.state.result = calc(this.hand);
  }
  
  render() {
    return (
      <div className="Player">
        <Card />
        <p>点数</p>
      </div>
    );
  }
}

export default Player
