import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContexProvider } from './Context/Contextprovider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContexProvider>
  <React.StrictMode>
  <App />
</React.StrictMode>
  </ContexProvider>
 
);

