import React, { useRef } from 'react';
import ls from 'local-storage';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';


import './Login.scss';

const CN = 'login-window';

const Login = () => {
  const chatTitle = 'Log in';
  const loginInput = useRef();

  const saveUsername = () => {
    const username = loginInput.current.value;
    ls.set('name', username);
  };

  return (
    <div className={CN}>
      <div className={`${CN}__title-wrapper`}>
        <span>{chatTitle}</span>
      </div>
      <div className={`${CN}__dialogue-wrapper`}>
        <TextField
          inputRef={loginInput}
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
          onClick={saveUsername}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
