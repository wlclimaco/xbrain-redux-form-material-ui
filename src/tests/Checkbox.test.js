import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../lib/Checkbox';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const input = {
    name: 'myCheckbox',
    value: true,
  };

  const meta = {};

  ReactDOM.render(<Checkbox input={input} meta={meta} />, div);
});
