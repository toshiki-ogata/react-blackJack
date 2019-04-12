import React from 'react';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
    };
    // const deck = [];
    const marks = ['spade', 'club', 'diamond', 'heart'];
    marks.forEach(suit => {
      Array.from(Array(13), (_, i) => ++i).forEach(number => {
        this.state.deck.push({ suit, number })
      })
    })
    // console.log(this.state.deck);
  }

  pick() {
    console.log('test');
    // return this.state.deck.splice(Math.floor(Math.random() * Math.floor(deck.length)), 1)[0]
  }

  render() {
    return (
      <div className="Deck">
        {/* {this.state.deck} */}
      </div>
    );
  }
}

export default Deck
