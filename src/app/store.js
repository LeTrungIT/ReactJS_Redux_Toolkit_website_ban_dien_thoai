import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/Slice/cartSlice";
import productSlice from "../features/Slice/productSlice";
import { combineReducers } from "redux";
import messageSlice from "../features/Slice/messageSlice";

const rootReducer = combineReducers({
  carts: cartSlice,
  products: productSlice,
  messages: messageSlice,
});
export const store = configureStore({
  reducer: rootReducer,
});
