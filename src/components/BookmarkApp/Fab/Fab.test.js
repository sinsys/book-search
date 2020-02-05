import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Fab from './Fab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fab />, div);
  ReactDOM.unmountComponentAtNode(div);
});
