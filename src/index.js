import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartBarProvider, { CartBarConent } from './components/context/CartBar';
import CartProvider from './components/context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <CartBarProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </CartBarProvider>

);

