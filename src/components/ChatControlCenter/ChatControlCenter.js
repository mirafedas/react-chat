import React, { Component } from 'react';
import ActiveChats from '../ActiveChats';
import RecentlySharedProoducts from '../RecentlySharedProoducts';

import './ChatControlCenter.scss'

import Button from '@material-ui/core/Button';
import MinimizeOutlinedIcon from '@material-ui/icons/MinimizeOutlined';
import IconButton from '@material-ui/core/IconButton';

const CN = 'chat-control-center'

class ChatControlCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onlineFamily: true,
      onlineChat: false,
      isMinimized: false
    }

    this.minimize = this.minimize.bind(this);
  }

  minimize() {
    const { isMinimized } = this.state;

    this.setState({
      isMinimized: !isMinimized
    });
  }

  render() {
    const { isMinimized } = this.state;
    const controlTitle = 'Chat Control Center';

    return (
      <div className={CN}>
        <div className={`${CN}__header`}>
        <IconButton
            type="submit"
            className={`${CN}__btn`}
            label="text"
            onClick={this.minimize}
          >
            <MinimizeOutlinedIcon />
          </IconButton>
          <h5 className={`${CN}__title`}>{controlTitle}</h5>
        </div>
        <div className={isMinimized ? `${CN}__hidden` : `${CN}__body`}>
          <ActiveChats />
          <div className={`${CN}__startjoin-btn-container`}>
            <Button variant="contained" color="primary" className={`${CN}__start-new-chat-btn startjoin-btn btn`}>Start new chat</Button>
            <Button variant="contained" color="secondary" className={`${CN}__start-new-chat-btn startjoin-btn btn`} >Join existing chat</Button>
          </div>
          <RecentlySharedProoducts />
        </div>
      </div>
    )
  }
}

export default ChatControlCenter;
