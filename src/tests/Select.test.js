import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../lib/Select';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const input = {
    name: 'mySelect',
    value: '1',
  };

  const meta = { touched: false, error: '' };

  ReactDOM.render(<Select label="Select" meta={meta} input={input} />, div);
});
