import {
  RESET_PURCHASE,
  ADD_DELIVERY,
  ADD_PAYMENT,
  ADD_PURCHASE_ID,
} from "./types";
import { PurchaseReduxState } from "../../utils/types";
import { type } from "os";

export const resetPurchase = () => ({ type: RESET_PURCHASE });
export const addDelivery = (value: PurchaseReduxState | any) => ({
  type: ADD_DELIVERY,
  payload: value,
});
export const addPayment = (value: PurchaseReduxState | any) => ({
  type: ADD_PAYMENT,
  payload: value,
});
export const addPurchaseId = (value: string) => ({
  type: ADD_PURCHASE_ID,
  payload: value,
});
