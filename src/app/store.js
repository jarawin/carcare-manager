import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "../slices/ordersSlice";
import layoutSlice from "../slices/layoutSlice";
import loginSlice from "../slices/loginSlice";

export const store = configureStore({
  reducer: {
    orders: ordersSlice,
    layout: layoutSlice,
    login: loginSlice,
  },
});
