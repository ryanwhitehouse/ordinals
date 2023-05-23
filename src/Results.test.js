import { render, screen } from '@testing-library/react';
import Results from './Results';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { checkOrdinalData, getOrdinalDetails } from './ordinalApi';

jest.mock('./ordinalAPI')

function setup(jsx, getOrdinalDetailsReturnValue, checkOrdinalDataReturnValue) {
    getOrdinalDetails.mockReturnValue(Promise.resolve(getOrdinalDetailsReturnValue ?? [{id: "60a7f0bcb9831896b8ac382d2b0974e2fe1832932016ddceb91a19d8aaec9635"}]))
    checkOrdinalData.mockReturnValue(Promise.resolve(checkOrdinalDataReturnValue ?? [{id: "60a7f0bcb9831896b8ac382d2b0974e2fe1832932016ddceb91a19d8aaec9635"}]))
    
    const queryClient = new QueryClient()
    return render(
        <QueryClientProvider client={queryClient}>
            {jsx}
        </QueryClientProvider>
    )
}

test('Renders no results correctly', () => {
    setup(<Results searchResults={[]} />);
  const noResultsLabel = screen.getByText(/no results found/i);

  expect(noResultsLabel).toBeInTheDocument();
});

test('Renders results correctly', async () => {
    setup(
        <Results searchResults={[{txid: '12345678', vout: 0}]} />, 
        {inscriptionNumber: '12345'},
        { id: '12345678' },
    );

    const resultsLabel = screen.getByText(/results/i);
    const firstInscription = await screen.findByText(/12345/i);
  
    expect(resultsLabel).toBeInTheDocument();
    expect(firstInscription).toBeInTheDocument();
  });