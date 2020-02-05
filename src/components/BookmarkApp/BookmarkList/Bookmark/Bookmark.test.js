import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Bookmark from './Bookmark';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bookmark />, div);
  ReactDOM.unmountComponentAtNode(div);
});
