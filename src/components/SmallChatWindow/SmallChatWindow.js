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
  render() {
    const chatTitle = 'Chat title';

    return (
      <div className={CN}>
        <div className={`${CN}__title-wrapper`}>
          <IconButton
            type="submit"
            className={`${CN}__btn`}
            label="text"
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
        <div className={`${CN}__dialogue-wrapper`} />
        <div className={`${CN}__input-wrapper`}>
          <TextField className={`${CN}__dialogue-input`} id="outlined-basic" label="Your message" variant="outlined" />
          <IconButton className={`${CN}__send-btn`}><SendIcon fontSize="large" /></IconButton>
        </div>
      </div>
    );
  }
}

export default SmallChatWindow;
