/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ls from 'local-storage';

const Dialogue = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const name = ls.get('name') || props.name;
  const { message } = props;

  return (
    <p>
      <strong>{name}: </strong><em>{message}</em>
    </p>
  );
};

export default Dialogue;
