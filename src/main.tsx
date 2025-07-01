// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/components/theme-provider'; // <-- Import

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"> {/* <-- Wrap App */}
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)