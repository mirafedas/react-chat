import React, { Component } from 'react';

import './ActiveChats.scss'

const CN = 'active-chats'

class ActiveChats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onlineFamily: true,
      onlineChat: false,
    }
  }
  render() {
    const { onlineFamily, onlineChat } = this.state;
    const familyChat = 'Family chat';
    const friendsChat = 'Friends chat';

    return (
      <div className={`${CN}__wrapper`}>
        <h5 className={`${CN}__title`}>Active chats</h5>
        <div className={`${CN}__active-chats`}>
        
          <div className={onlineFamily ? `${CN}__onlineStatus online` : `${CN}__onlineStatus offline`}></div>
          <span>{familyChat}</span>
        </div>
        <div className={`${CN}__active-chats`}>
          <div className={onlineChat ? `${CN}__onlineStatus online` : `${CN}__onlineStatus offline`}></div>
          <span>{friendsChat}</span>
        </div>
      </div>
    )
  }
}

export default ActiveChats;
