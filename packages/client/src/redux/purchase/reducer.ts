import initialState from "./state";
import {
  RESET_PURCHASE,
  ADD_DELIVERY,
  ADD_PAYMENT,
  ADD_PURCHASE_ID,
} from "./types";

import { PurchaseReduxState } from "../../utils/types";

const reducer = (
  state: any = initialState,
  action: any
): PurchaseReduxState => {
  switch (action.type) {
    case RESET_PURCHASE: {
      return initialState;
    }
    case ADD_DELIVERY: {
      return {
        ...state,
        delivery: action.payload,
      };
    }
    case ADD_PAYMENT: {
      return {
        ...state,
        payment: action.payload,
      };
    }
    case ADD_PURCHASE_ID: {
      return {
        ...state,
        purchaseId: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
