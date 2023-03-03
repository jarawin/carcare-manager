import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "../slices/ordersSlice";
import layoutSlice from "../slices/layoutSlice";
import loginSlice from "../slices/loginSlice";
import promSlice from "../slices/promSlice";

export const store = configureStore({
  reducer: {
    orders: ordersSlice,
    layout: layoutSlice,
    login: loginSlice,
    prom: promSlice,
  },
});
