import { RESET_PURCHASE, ADD_DELIVERY, ADD_PAYMENT } from "./types";
import { PurchaseReduxState } from "../../utils/types";

export const resetPurchase = () => ({ type: RESET_PURCHASE });
export const addDelivery = (value: PurchaseReduxState | any) => ({
  type: ADD_DELIVERY,
  payload: value,
});
export const addPayment = (value: PurchaseReduxState | any) => ({
  type: ADD_PAYMENT,
  payload: value,
});
