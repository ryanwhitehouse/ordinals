import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

import { getOrdinalData } from './ordinalApi';
jest.mock('./ordinalAPI')

function setup(jsx, data) {
    getOrdinalData.mockReturnValue(Promise.resolve(data ?? [{id: "60a7f0bcb9831896b8ac382d2b0974e2fe1832932016ddceb91a19d8aaec9635"}]))

    return {
        user: userEvent.setup(),
        ...render(jsx),
    }
}

test('allows search', async () => {
  const {user} = setup(<App />);
  const inputElement = screen.getByText(/owner bitcoin address/i);

  expect(screen.queryByText(/^results$/i)).not.toBeInTheDocument();

  await user.type(inputElement, 'test')
  await user.click(screen.getByRole('button', {name: /look up/i}))
  
  expect(screen.getByText(/^results$/i)).toBeInTheDocument();
});

test('search calls API', async () => {
  const {user} = setup(<App />);
  const inputElement = screen.getByText(/owner bitcoin address/i);

  await user.type(inputElement, 'test')
  await user.click(screen.getByRole('button', {name: /look up/i}))
  
  expect(screen.getByText(/^results$/i)).toBeInTheDocument();
  expect(getOrdinalData).toHaveBeenCalledTimes(1);
})

test('given no results, user sees correct message', async () => {
    const {user} = setup(<App />, []);
    const inputElement = screen.getByText(/owner bitcoin address/i);
  
    await user.type(inputElement, 'test')
    await user.click(screen.getByRole('button', {name: /look up/i}))
    
    expect(screen.queryByText(/^results$/i)).not.toBeInTheDocument();
    expect(screen.getByText(/^no results found$/i)).toBeInTheDocument();
    expect(getOrdinalData).toHaveBeenCalledTimes(1);
  })