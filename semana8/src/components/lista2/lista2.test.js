import React from 'react';
import ReactDOM from 'react-dom';
import Lista2 from './Lista2';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lista2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});