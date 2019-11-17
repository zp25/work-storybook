import React, { useState } from 'react';
import { configure, addDecorator } from '@storybook/react';

import 'normalize.css/normalize.css';
import style from '@/assets/root.module.scss';

import Login from './src/login';
import storage from './src/storage';

const AppDecorator = storyFn => {
  const [token, setToken] = useState(storage.token);

  const submit = (val) => {
    setToken(val);
    storage.token = val;
  };

  return (
    <div className={style.app}>
      {
        token ? storyFn() : <Login submit={submit} />
      }
    </div>
  );
};

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(AppDecorator);
