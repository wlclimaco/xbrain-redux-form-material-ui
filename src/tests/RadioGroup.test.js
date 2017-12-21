import React from 'react';
import ReactDOM from 'react-dom';
import RadioGroup from '../lib/RadioGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const input = {
    name: 'myRadioGroup',
    value: '1',
  };

  const meta = {};

  ReactDOM.render(<RadioGroup input={input} meta={meta} />, div);
});
