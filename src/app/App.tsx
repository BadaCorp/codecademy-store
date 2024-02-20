import React from "react";

import { Inventory } from "../features/inventory/Inventory.tsx";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.tsx";
// Import the Cart component here.
import { Cart } from "../features/cart/Cart.tsx";
import { SearchTerm } from "../features/searchTerm/SearchTerm.tsx";
import { AppProps } from "../types/app";

export const App = ({ state, dispatch }: AppProps) => {
  return (
    <div>
      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />

      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        searchTerm={state.searchTerm}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
