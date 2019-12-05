/* eslint-disable no-console */
import React from 'react';

import MinimizeOutlinedIcon from '@material-ui/icons/MinimizeOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import IconButton from '@material-ui/core/IconButton';
import ChatInput from '../ChatInput';
import Dialogue from '../Dialogue';

import './SmallChatWindow.scss';

const CN = 'small-window';
const URL = 'ws://localhost:3030';

class SmallChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Groot',
      messages: [],
      isMinimized: false
    };
    this.ws = new WebSocket(URL);

    this.minimize = this.minimize.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };

    this.ws.onmessage = (evt) => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        ws: new WebSocket(URL)
      });
    };
  }

  onSubmitMessage(messageString) {
    console.log(2, 'submit!', messageString);
    const { name } = this.state;
    const message = { name, message: messageString };
    console.log(message);
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
    // const { addMessages } = this.props;
    // console.log(addMessage);
    // this.addMessage(message);
  }

  addMessage = (message) => this.setState((state) => ({ messages: [message, ...state.messages] }))

  submitMessage = (messageString) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const { name } = this.state;
    const message = { name, message: messageString };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  }

  minimize() {
    const { isMinimized } = this.state;

    this.setState({
      isMinimized: !isMinimized
    });
  }

  render() {
    const chatTitle = 'Chat title';
    const { isMinimized, messages } = this.state;
    const { customClassName } = this.props;

    return (
      <div className={`${CN} ${customClassName}`}>
        <div className={`${CN}__title-wrapper`}>
          <IconButton
            type="submit"
            className={`${CN}__btn`}
            label="text"
            onClick={this.minimize}
          >
            <MinimizeOutlinedIcon />
          </IconButton>
          <span>{chatTitle}</span>
          <IconButton
            type="submit"
            className={`${CN}__btn`}
            label="text"
          >
            <PeopleAltOutlinedIcon />
          </IconButton>
          <IconButton
            type="submit"
            className={`${CN}__btn`}
            label="text"
          >
            <SettingsApplicationsOutlinedIcon />
          </IconButton>
        </div>
        <div className={isMinimized ? `${CN}__hidden` : `${CN}__dialogue-wrapper`}>
          {messages.map((message) => (
            <Dialogue
              key={message.message}
              message={message.message}
              name={message.name}
            />
          ))}
        </div>
        <div className={isMinimized ? `${CN}__hidden` : `${CN}__input-wrapper`}>
          <ChatInput onSubmitMessage={this.onSubmitMessage} ws={this.ws} />
        </div>
      </div>
    );
  }
}

export default SmallChatWindow;
