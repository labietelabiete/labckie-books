import { CartReduxState } from "./types";

export function getTotalPrice(cartItems: CartReduxState[]) {
  const totalPriceNumber: number = cartItems.reduce(
    (sum: number, item: CartReduxState) => {
      return sum + item.n * item.price;
    },
    0
  );
  return totalPriceNumber.toFixed(2);
}

export function getTotalBooks(cartItems: CartReduxState[]) {
  return cartItems.reduce((sum: number, book: CartReduxState) => {
    return sum + book.n;
  }, 0);
}
