// Imports
import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

// Initializations
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Deimosy/i);
  expect(linkElement).toBeInTheDocument();
});
