import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { CART_INFO, PURCHASE_INFO } from "../constants/local-storage";
import { loadLocalStorageItems, setLocalStorage } from "../utils/localStorage";

import cartInitialState from "./cart/state";
import purchaseInitialState from "./purchase/state";

import thunk from "redux-thunk";

import CombinedReducers from "./reducers";

const ls = {
  cart: loadLocalStorageItems(CART_INFO, cartInitialState),
  purchase: loadLocalStorageItems(PURCHASE_INFO, purchaseInitialState),
};

const store = createStore(
  CombinedReducers,
  ls,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => setLocalStorage(store.getState().cart, CART_INFO));
store.subscribe(() =>
  setLocalStorage(store.getState().purchase, PURCHASE_INFO)
);

export default store;
