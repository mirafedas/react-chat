import React from 'react';

import DraggableWindow from './DraggableWindow';

import './SmallChatWindow.scss';

class SmallChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMinimized: false
    };

    this.minimize = this.minimize.bind(this);
  }

  minimize() {
    const { isMinimized } = this.state;

    this.setState({
      isMinimized: !isMinimized
    });
  }

  render() {
    const chatTitle = 'Chat title';
    const { isMinimized } = this.state;

    return (
      <DraggableWindow
        chatTitle={chatTitle}
        isMinimized={isMinimized}
        clickHandler={this.minimize}
      />
    );
  }
}

export default SmallChatWindow;
