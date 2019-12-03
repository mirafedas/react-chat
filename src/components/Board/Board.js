import React from 'react';
import { DndProvider, useDrop } from 'react-dnd-cjs';
import HTML5Backend from 'react-dnd-html5-backend-cjs';

import SmallChatWindow from '../SmallChatWindow';
import ItemTypes from '../../constants/itemTypes';

import './Board.scss';

const Board = () => {
  const [drop] = useDrop({
    accept: ItemTypes.CHAT_WINDOW,
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="chats-container" ref={drop}>
        <SmallChatWindow />
      </div>
      {/* {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow'
          }}
        />
      )} */}
    </DndProvider>
  );
};

export default Board;
