import { combineReducers } from "redux";
import { cartSlice } from "./CartReducer/cartSlice";
import { userSlice } from "./UserReducer/userSlice";

export const rootReducer = combineReducers({
  CartReducer: cartSlice.reducer,
  UserReducer: userSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
