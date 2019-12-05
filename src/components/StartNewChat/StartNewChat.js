import React, { Component, createRef } from 'react';
import ls from 'local-storage';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MinimizeOutlinedIcon from '@material-ui/icons/MinimizeOutlined';


import './StartNewChat.scss';

const CN = 'start-new-chat-window';

class StartNewChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatName: 'Start new chat',

    }

    // this.userChatNameInput = React.useRef(name);
    // this.chatTitleInput = React.useRef(title);
    this.saveUsername = this.saveUsername.bind(this);
  }
  // const chatTitle = 'Start new chat';
  // const loginInput = useRef();

  saveUsername() {
    const userChatNameInput = createRef(name);
    const chatTitleInput = createRef(title);
    // const { userChatNameInput, chatTitleInput } = this.state;
    const usernameInChat = this.userChatNameInput.current.value;
    const chatTitle = this.chatTitleInput.current.value;
    const chatData = [userChatNameInput, chatTitleInput];

    console.log('name', chatData)
    ls.set('name', usernameInChat, chatTitle);
  };

  render() {
    const { chatName } = this.state;
    
    return (
      <div className={CN}>
        <div className={`${CN}__title-wrapper`}>
        <IconButton
              type="submit"
              className={`${CN}__btn`}
              label="text"
              onClick={this.minimize}
            >
              <MinimizeOutlinedIcon />
          </IconButton>
          <span>{chatName}</span>
        </div>
        <div className={`${CN}__dialogue-wrapper`}>
          <TextField
            ref={this.chatTitleInput(title)}
            inputRef={this.chatTitleInput}
            className={`${CN}__text-input`}
            id="input-with-icon-textfield"
            label="Username"
            // InputProps={{
              // startAdornment: (
              //   //   <AccountCircle />
              //   // </InputAdornment>
              //   )
              // }}
          />
              <InputAdornment position="start" />
          <TextField
            ref={this.userChatNameInput(name)}
            inputRef={this.userChatNameInput}
            className={`${CN}__text-input`}
            id="input-with-icon-textfield"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={`${CN}__enter-btn btn`}
            onClick={this.saveUsername}
          >
            Log in
          </Button>
        </div>
      </div>
    );
  }
};

export default StartNewChat;
