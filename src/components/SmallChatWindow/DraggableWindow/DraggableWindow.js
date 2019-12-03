import React from 'react';
import { useDrag } from 'react-dnd-cjs';

import MinimizeOutlinedIcon from '@material-ui/icons/MinimizeOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

import ItemTypes from '../../../constants/itemTypes';

import '../SmallChatWindow.scss';

const CN = 'small-window';

const DraggableWindow = (props) => {
  const { clickHandler, chatTitle, isMinimized } = props;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CHAT_WINDOW },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      className={CN}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
      <div className={`${CN}__title-wrapper`}>
        <IconButton
          type="submit"
          className={`${CN}__btn`}
          label="text"
          onClick={clickHandler}
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
          className={`${CN}__dialogue-input`}
          id="outlined-basic"
          label="Your message"
          variant="outlined"
        />
        <IconButton className={`${CN}__send-btn`}>
          <SendIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default DraggableWindow;
