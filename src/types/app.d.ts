import { Dispatch } from "react";
import { SearchTermType } from "./searchTerm";
import { CurrencyFilterType } from "./currencyFilter";
import { InventoryType } from "./inventory";
import { CartType } from "./cart";

export interface AppProps {
  state: {
    searchTerm: SearchTermType;
    currencyFilter: CurrencyFilterType;
    inventory: InventoryType[];
    cart: CartType;
  };
  dispatch: Dispatch<Function>;
}
