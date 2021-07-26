import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastProvider } from 'react-toast-notifications'

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>
  ,
  document.getElementById('root')
);
reportWebVitals();
