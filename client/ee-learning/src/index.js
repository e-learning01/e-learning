import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import CartState from './Context/Cart/CartState';



const root = createRoot(document.getElementById('root'));
root.render(
<CartState> 
  <App />
</CartState>
// all app has access to the cartState
      
);

