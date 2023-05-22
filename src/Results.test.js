import { render, screen } from '@testing-library/react';
import Results from './Results';

test('Renders no results correctly', () => {
  render(<Results searchResults={[]} />);
  const noResultsLabel = screen.getByText(/no results found/i);

  expect(noResultsLabel).toBeInTheDocument();
});

test('Renders results correctly', () => {
    render(<Results searchResults={[{id: '12345678'}, {id: '4567890'}]} />);
    const resultsLabel = screen.getByText(/results/i);
    const firstInscription = screen.getByText(/inscription 12345/i);
    const secondInscription = screen.getByText(/inscription 45678/i);
  
    const substringTest1 = screen.queryByText(/inscription 123456/i);
    const substringTest2 = screen.queryByText(/inscription 456789/i);
    
    expect(resultsLabel).toBeInTheDocument();
    expect(firstInscription).toBeInTheDocument();
    expect(secondInscription).toBeInTheDocument();

    expect(substringTest1).not.toBeInTheDocument();
    expect(substringTest2).not.toBeInTheDocument();
  });