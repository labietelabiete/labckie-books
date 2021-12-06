import initialState from "./state";
import {
  RESET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART_REPEAT,
  REMOVE_FROM_CART_REPEAT,
} from "./types";

import { CartReduxState } from "../../utils/types";

const reducer = (state: any = initialState, action: any): CartReduxState => {
  switch (action.type) {
    case RESET_CART: {
      return initialState;
    }
    case ADD_TO_CART: {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        books: [
          ...state.books.slice(0, action.payload),
          ...state.books.slice(action.payload + 1),
        ],
      };
    }
    case ADD_TO_CART_REPEAT: {
      const bookRepeated = state.books[action.payload];
      bookRepeated.n++;
      return {
        ...state,
        books: [
          ...state.books.slice(0, action.payload),
          bookRepeated,
          ...state.books.slice(action.payload + 1),
        ],
      };
    }
    case REMOVE_FROM_CART_REPEAT: {
      const bookRepeated = state.books[action.payload];
      bookRepeated.n--;
      return {
        ...state,
        books: [
          ...state.books.slice(0, action.payload),
          bookRepeated,
          ...state.books.slice(action.payload + 1),
        ],
      };
    }

    default:
      return state;
  }
};

export default reducer;
