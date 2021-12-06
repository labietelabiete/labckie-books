import { RESET_PURCHASE, ADD_DELIVERY } from "./types";
import { PurchaseReduxState } from "../../utils/types";

export const resetPurchase = () => ({ type: RESET_PURCHASE });
export const addDelivery = (value: PurchaseReduxState | any) => ({
  type: ADD_DELIVERY,
  payload: value,
});
