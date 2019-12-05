import React from 'react';
import Particles from 'react-particles-js';
import Draggable from 'react-draggable';

import ChatControlCenter from './components/ChatControlCenter';
import SmallChatWindow from './components/SmallChatWindow';
import Login from './components/Login';
import particlesParams from './constants/particlesParams';
import StartNewChat from './components/StartNewChat';
import JoinChat from './components/JoinChat';

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
    <Login />
    <ChatControlCenter />
    <JoinChat />
    <StartNewChat />
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 920, y: 0 }}
      grid={[25, 25]}
      scale={1}
    >
      <div className="handle">
        <SmallChatWindow />
      </div>
    </Draggable>
    <Particles
      params={particlesParams}
      style={particlesStyles}
    />
  </div>

);

export default App;
