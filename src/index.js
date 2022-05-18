import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataContextProvider } from './Context/DataContext';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataContextProvider >
        <App />
      </DataContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

