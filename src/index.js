import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//importing bootstrap module and fortawesom
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
