import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '../lib/TextField';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const input = {
    name: 'myTextField',
    value: '1',
  };

  const meta = { touched: false, error: '' };

  ReactDOM.render(<TextField label="TextField" meta={meta} input={input} />, div);
});
