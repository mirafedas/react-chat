import React from 'react';
import Particles from 'react-particles-js';
import { DndProvider } from 'react-dnd-cjs';
import HTML5Backend from 'react-dnd-html5-backend-cjs';

import ChatControlCenter from './components/ChatControlCenter';
import Board from './components/Board';
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
  <DndProvider backend={HTML5Backend}>
    <div className={`${CN}`}>
      <div className="control-center-container">
        <ChatControlCenter />
      </div>
      <Board />
      <Particles
        params={particlesParams}
        style={particlesStyles}
      />
    </div>
  </DndProvider>
);

export default App;
