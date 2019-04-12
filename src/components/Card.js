import React from 'react';

function Card (props) {
  return (
    <div className="Card">
      <span>{props.suit}の</span>
      <span>{props.number}</span>
    </div>
  );
}

export default Card
