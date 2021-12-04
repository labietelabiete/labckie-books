import { RESET_CART, ADD_TO_CART, ADD_TO_CART_REPEAT } from "./types";
import { CartReduxState } from "../../utils/types";

export const resetCart = () => ({ type: RESET_CART });
export const addToCart = (value: CartReduxState) => ({
  type: ADD_TO_CART,
  payload: value,
});
export const addToCartRepeat = (value: number) => ({
  type: ADD_TO_CART_REPEAT,
  payload: value,
});
