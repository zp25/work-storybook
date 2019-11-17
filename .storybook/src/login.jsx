import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import style from './login.module.scss';

const Login = ({ submit }) => {
  const [code, setCode] = useState('');

  const handler = useCallback((e) => {
    e.preventDefault();

    if (code) {
      submit(code);
    }
  });

  return (
    <form className={style.login} onSubmit={handler}>
      <input
        type="text"
        className={style.input}
        name="code"
        autoComplete="off"
        value={code}
        onChange={({ target: { value } }) => { setCode(value); }}
      />

      <button type="submit" className={style.submit}>登录</button>
    </form>
  );
};

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Login;
