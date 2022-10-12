import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "../slices/ordersSlice";
import layoutSlice from "../slices/layoutSlice";

export const store = configureStore({
  reducer: {
    orders: ordersSlice,
    layout: layoutSlice,
  },
});
