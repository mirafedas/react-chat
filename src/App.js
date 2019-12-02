import React from 'react';
import Particles from 'react-particles-js';

import SmallChatWindow from './components/SmallChatWindow';
import particlesParams from './constants/particlesParams';

import './App.scss';

const CN = 'app';
const particlesStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  zIndex: -1
};

const App = () => (
  <div className={CN}>
    <SmallChatWindow />

    <Particles
      params={particlesParams}
      style={particlesStyles}
    />
  </div>
);

export default App;
