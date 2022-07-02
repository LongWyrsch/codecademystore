import './App.css';
import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js'
import {SearchTerm} from '../features/searchTerm/SearchTerm.js'

// Render the Cart component below <Inventory />
function App (props) {

  const { state, dispatch } = props;

  return (
    <div>
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
        searchTerm={state.searchTerm}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};

export default App;