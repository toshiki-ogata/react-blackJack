import React from 'react';
import Card from './Card';

class Dealer extends React.Component {
  render() {
    return (
      <div className="Dealer">
        <Card />
        <p>点数</p>
      </div>
    );
  }
}

export default Dealer
