import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import CountrySelector from './CountrySelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountrySelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
