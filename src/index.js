import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlayerState from './context/player/PlayerState'


ReactDOM.render(
  <PlayerState>
    <App />
  </PlayerState>,
  document.getElementById('root')
);


