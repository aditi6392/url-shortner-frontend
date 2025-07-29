
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // ✅ Tailwind CSS import
import { ContextProvider } from './contextApi/ContextApi';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ ContextProvider>
  </React.StrictMode>
);
