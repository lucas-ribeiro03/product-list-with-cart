import { combineReducers } from "redux";
import { cartSlice } from "./CartReducer/cartSlice";

export const rootReducer = combineReducers({
  CartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
