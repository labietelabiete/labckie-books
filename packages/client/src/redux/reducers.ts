import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import purchaseReducer from "./purchase/reducer";

const reducers = combineReducers({
  cart: cartReducer,
  purchase: purchaseReducer,
});

export default reducers;
