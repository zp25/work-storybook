import React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from '@/src/spinner';

storiesOf('Spinner', module)
  .add('default', () => (
    <Spinner />
  ));
