import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import './styles/index.css';
import UserProvider from './contexts/UserContext.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,

);
