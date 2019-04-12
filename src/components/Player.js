import React from 'react';
import Card from './Card';
import pick from '../utils/deck';
import calc from '../utils/calc'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hand: [],
      result: null,
    };
    this.state.hand.push(pick());
    this.state.hand.push(pick());
    this.state.result = calc(this.state.hand);
  }

  hit() {
    this.setState(state => {
      return { hand: state.hand.concat(pick()) };
    });
    this.setState(state => {
      return { result: calc(state.hand) };
    });
    this.props.callback();
  }

  stand() {
    console.log('test');
    this.props.callback();
  }
  
  render() {
    const card = this.state.hand.map((i, index) => {
      return <Card key={index} suit={this.state.hand[index].suit} number={this.state.hand[index].number} />;
    });
    if(this.state.result > 21) {
      console.log('バースト');
    }

    return (
      <div className="Player">
        <h2>プレイヤー</h2>
        {card}
        <p>あなたの点数：{this.state.result}</p>
        <button onClick={() => this.hit()}>追加のカードを引く</button>
        <button onClick={() => this.stand()}>降りる</button>
      </div>
    );
  }
}

export default Player
