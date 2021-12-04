import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { CART_INFO } from "../constants/local-storage";
import { loadLocalStorageItems, setLocalStorage } from "../utils/localStorage";

import cartInitialState from "./cart/state";

import thunk from "redux-thunk";

import CombinedReducers from "./reducers";

const ls = {
  cart: loadLocalStorageItems(CART_INFO, cartInitialState),
};

const store = createStore(
  CombinedReducers,
  ls,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => setLocalStorage(store.getState().cart, CART_INFO));

export default store;
