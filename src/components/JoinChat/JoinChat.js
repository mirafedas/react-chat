import React, { Component, createRef } from 'react';
import ls from 'local-storage';
 
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MinimizeOutlinedIcon from '@material-ui/icons/MinimizeOutlined';
 
import './JoinChat.scss';
 
const CN = 'join-chat-window';
 
class JoinChat extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      chatName: 'Join existing chat',
      closed: false
    };
 
    this.name = createRef();
    this.chatCode = createRef();
    this.saveUsername = this.saveUsername.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }
 
  saveUsername() {
    const usernameInChat = this.name.current.value;
    const joinChatCode = this.chatCode.current.value;
    const chatData = [usernameInChat, joinChatCode];
 
    console.log('name', usernameInChat, joinChatCode, chatData);
    ls.set('name', usernameInChat, joinChatCode);
  }

  closeWindow() {
    const { closed } = this.state;

    this.setState({
      closed: !closed
    });
  }
 
  render() {
    const { chatName, closed } = this.state;

    if (closed) return null;
 
    return (
      <div className={CN}>
        <div className={`${CN}__title-wrapper`}>
          <div className={`${CN}__minimaze-btn-container`}>
            <IconButton
              type="submit"
              className={`${CN}__btn minimaze-btn`}
              label="text"
              onClick={this.closeWindow}
            >
              <MinimizeOutlinedIcon />
            </IconButton>
          </div>
          <div className={`${CN}__title-container`}>
            <span className={`${CN}__title`}>{chatName}</span>
          </div>
        </div>
        <div className={`${CN}__dialogue-wrapper`}>
          <TextField
            inputRef={this.chatCode}
            className={`${CN}__title-input`}
            id="input-with-icon-textfield"
            label="Join code"
          />
          <TextField
            inputRef={this.name}
            className={`${CN}__name-input`}
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
            color="secondary"
            className={`${CN}__enter-btn btn`}
            onClick={this.saveUsername}
          >
            Join chat
          </Button>
        </div>
      </div>
    );
  }
}
 
export default JoinChat;
