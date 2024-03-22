import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

import { ChakraProvider } from '@chakra-ui/react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
