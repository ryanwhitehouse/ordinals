import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import OrdinalSearch from './OrdinalSearch'
import OrdinalDetails from './OrdinalDetails'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OrdinalSearch />,
    },
    {
      path: "/ordinal/:ordinalId",
      element: <OrdinalDetails />,
    },
  ]);

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
