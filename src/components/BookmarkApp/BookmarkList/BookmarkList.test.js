import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import BookmarkList from './BookmarkList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookmarkList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
