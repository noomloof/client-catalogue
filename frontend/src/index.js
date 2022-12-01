import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
