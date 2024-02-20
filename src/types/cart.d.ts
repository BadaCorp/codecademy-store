import { Dispatch } from "react";
import { CurrencyFilterType } from "./currencyFilter";

interface Cart {
  price: number;
  quantity: number;
}

export interface CartType {
  [key: string]: Cart;
}

interface changeItemQuantityType {
  type: string;
  payload: {
    name: string;
    newQuantity: number;
  };
}

export interface CartProps {
  cart: CartType;
  currencyFilter: CurrencyFilterType;
  dispatch: Dispatch<Function>;
}
