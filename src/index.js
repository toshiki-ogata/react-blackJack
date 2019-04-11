import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game'

function App() {
  return (
    <div className="app">
      <Game />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));