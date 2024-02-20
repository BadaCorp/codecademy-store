import { CartType } from "../types/cart";
import { CurrencyFilterType } from "../types/currencyFilter";

export function calculatePrice(price: number, currency: String) {
  switch (currency) {
    case "EUR":
      return price * 0.86;
    case "CAD":
      return price * 1.33;
    default:
      return price;
  }
}

export function calculateTotal(cart: CartType, currency: String) {
  let totalUSD = 0;
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });
  return calculatePrice(totalUSD, currency).toFixed(2);
}

export function getCurrencySymbol({ currencyFilter }: CurrencyFilterType) {
  switch (currencyFilter) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "CAD":
      return "$";
    default:
      return "";
  }
}

export function filterInventory(inventory, searchTerm) {
  return inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
