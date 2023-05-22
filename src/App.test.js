import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

test('renders learn react link', () => {
  setup(<App />);
  const titleElement = screen.getByText(/ordinal inscription lookup/i);
  const inputElement = screen.getByText(/owner bitcoin address/i);

  expect(titleElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test('allows search', async () => {
  const {user} = setup(<App />);
  const inputElement = screen.getByText(/owner bitcoin address/i);

  expect(screen.queryByText(/results/i)).not.toBeInTheDocument();

  await user.type(inputElement, 'test')
  await user.click(screen.getByRole('button', {name: /look up/i}))
  
  expect(screen.getByText(/results/i)).toBeInTheDocument();
});
