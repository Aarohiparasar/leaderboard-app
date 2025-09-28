import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StudentContextProvider } from './pages/context/context.jsx'; // import your context provider

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StudentContextProvider>
        <App />
      </StudentContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
