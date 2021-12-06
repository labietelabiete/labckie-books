import {
  RESET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART_REPEAT,
  REMOVE_FROM_CART_REPEAT,
} from "./types";
import { CartReduxState } from "../../utils/types";

export const resetCart = () => ({ type: RESET_CART });
export const addToCart = (value: CartReduxState) => ({
  type: ADD_TO_CART,
  payload: value,
});
export const removeFromCart = (value: number) => ({
  type: REMOVE_FROM_CART,
  payload: value,
});

export const addToCartRepeat = (value: number) => ({
  type: ADD_TO_CART_REPEAT,
  payload: value,
});
export const removeFromCartRepeat = (value: number) => ({
  type: REMOVE_FROM_CART_REPEAT,
  payload: value,
});
