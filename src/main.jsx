


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';

import SnackarProvider from './contexts/SnackarContext';

import './index.css';


import router from './Router/Router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackarProvider>
    <RouterProvider router={router} />
    </SnackarProvider>
  </StrictMode>
);
