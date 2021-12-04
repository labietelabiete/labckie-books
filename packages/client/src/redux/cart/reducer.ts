import initialState from "./state";
import { RESET_CART, ADD_TO_CART } from "./types";

import { ShoppingCartReduxState } from "../../utils/types";

const reducer = (
  state: ShoppingCartReduxState = initialState,
  action: any
): ShoppingCartReduxState => {
  switch (action.type) {
    case RESET_CART: {
      return initialState;
    }
    case ADD_TO_CART: {
      return {
        ...state,
        nItems: ++state.nItems,
      };
    }

    default:
      return state;
  }
};

export default reducer;
