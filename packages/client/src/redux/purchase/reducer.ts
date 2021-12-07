import initialState from "./state";
import { RESET_PURCHASE, ADD_DELIVERY, ADD_PAYMENT } from "./types";

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
    default:
      return state;
  }
};

export default reducer;
