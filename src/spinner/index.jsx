import React, { memo } from 'react';

import './style.scss';

const arr = [...new Array(12)].map((d, index) => ({
  id: index + 1,
}));

const Spinner = memo(() => (
  <div className="sk-circle">
    {
      arr.map(d => (
        <div
          key={d.id}
          className="sk-circle-dot"
        />
      ))
    }
  </div>
));

export default Spinner;
