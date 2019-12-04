import React from 'react';

import MinimizeOutlinedIcon from '@material-ui/icons/MinimizeOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

import './SmallChatWindow.scss';

const CN = 'small-window';

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
        <div className={isMinimized ? `${CN}__hidden` : `${CN}__dialogue-wrapper`} />
        <div className={isMinimized ? `${CN}__hidden` : `${CN}__input-wrapper`}>
          <TextField
            ref={(node) => { this.node = node; }}
            className={`${CN}__dialogue-input`}
            id="outlined-basic"
            label="Your message"
            variant="outlined"
            onMouseDown={(e) => e.stopPropagation()}
          />
          <IconButton className={`${CN}__send-btn`}>
            <SendIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default SmallChatWindow;
