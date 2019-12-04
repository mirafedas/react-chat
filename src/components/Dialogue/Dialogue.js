/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Dialogue = ({ name, message }) => (
  <p>
    <strong>{name}: </strong><em>{message}</em>
  </p>
);

export default Dialogue;
