// Import createStore and combineReducers here.
import { createStore, combineReducers } from "redux";
// Import the slice reducers here.
import { inventoryReducer } from "../features/inventory/inventorySlice.ts";
import { cartReducer } from "../features/cart/cartSlice.ts";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice.ts";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.ts";

// Create and export the store here.
const rootReducer = combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  searchTerm: searchTermReducer,
});

export const store = createStore(rootReducer);
