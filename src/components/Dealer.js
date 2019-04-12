import React from 'react';
import Card from './Card';
import pick from '../utils/deck';
import calc from '../utils/calc'

class Dealer extends React.Component {
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
    this.setState(prevState => {
      return { hand: prevState.hand.concat(pick()) };
    });
    this.setState(prevState => {
      return { result: calc(prevState.hand) };
    });
  }
  
  render() {
    const card = this.state.hand.map((i, index) => {
      return <Card key={index} suit={this.state.hand[index].suit} number={this.state.hand[index].number} />;
    });

    return (
      <div className="Dealer">
        <h2>ディーラー</h2>
        {card}
        <p>あなたの点数：{this.state.result}</p>
      </div>
    );
  }
}

export default Dealer
