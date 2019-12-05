import React from 'react';

import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

import './ChatInput.scss';

const CN = 'chat-input';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageString: ''
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    const { onSubmitMessage } = this.props;
    const { messageString } = this.state;

    onSubmitMessage(messageString);
    this.setState({ messageString: '' });
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.submit();
        }}
      >
        <TextField
          ref={(node) => { this.node = node; }}
          className={`${CN}__dialogue-input`}
          id="outlined-basic"
          label="Your message"
          variant="outlined"
          onChange={(e) => this.setState({ messageString: e.target.value })}
          onMouseDown={(e) => e.stopPropagation()}
        />
        <IconButton className={`${CN}__send-btn`} onClick={this.submit}>
          <SendIcon fontSize="large" />
        </IconButton>
      </form>
    );
  }
}

export default ChatInput;
