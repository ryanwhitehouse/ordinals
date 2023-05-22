import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application successfully', () => {
  render(<App />);
  const titleElement = screen.getByText(/ordinal inscription lookup/i);
  const inputElement = screen.getByText(/owner bitcoin address/i);

  expect(titleElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});