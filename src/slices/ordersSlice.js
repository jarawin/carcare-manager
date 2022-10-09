import { createSlice } from "@reduxjs/toolkit";
import statusList from "../data/statusList";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {
    addOrder: (state, action) => { //  TODO PASS
      var temp = []
      action.payload.forEach((element) => {
        const settings = {
          ...element,
          showSetting: false,
          showBooking: false,
          showArrived: false,
          showCode: false,
        };
        temp.push(settings);
      });

      state.orders = temp;
    },
    nextStatus: (state, action) => { //  TODO PASS
      const idxOrder = action.payload.oIdx;
      const idxOrderList = statusList.findIndex(
        (status) => status.name === action.payload.status
      );
      if (idxOrderList < statusList.length - 1 && idxOrderList > 0) {
        if (idxOrderList == 1) {
          state.orders[idxOrder].order_status = statusList[idxOrderList + 2].name
        } else {
          state.orders[idxOrder].order_status = statusList[idxOrderList + 1].name
        }
      }
    },
    prevStatus: (state, action) => { // TODO PASS
      const idxOrder = action.payload.oIdx;
      const idxOrderList = statusList.findIndex(
        (status) => status.name === action.payload.status
      );

      if (idxOrderList > 3) {
        state.orders[idxOrder].order_status = statusList[idxOrderList - 1].name
      }
    },
    resetStatus: (state, action) => { //  TODO PASS
      const idxOrder = action.payload.oIdx;

      if (state.orders[idxOrder].is_booking) {
        state.orders[idxOrder].order_status = "BOOKING";
      } else {
        state.orders[idxOrder].order_status = "ARRIVED";
      }
    },
    cancelStatus: (state, action) => { //  TODO PASS
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].order_status = "CANCELLED";
    },
    setShowSetting: (state, action) => { //  TODO PASS
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showSetting = action.payload.isShow;
    },
    setShowBooking: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showBooking = action.payload.isShow;
    },
    setShowArrived: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showArrived = action.payload.isShow;
    },
    setShowCode: (state, action) => {
      const idxOrder = action.payload.oIdx;
      state.orders[idxOrder].showCode = action.payload.isShow;
    },
    setServiceDone: (state, action) => {
      const idxOrder = action.payload.oIdx;
      const idxService = action.payload.sIdx;
      state.orders[idxOrder].services[idxService].is_done = action.payload.isDone;
    },
  },
});

export const {
  addOrder,
  nextStatus,
  prevStatus,
  resetStatus,
  cancelStatus,
  setShowSetting,
  setShowBooking,
  setShowArrived,
  setShowCode,
  setServiceDone,
} = orderSlice.actions;

export const selectOrder = (state) => state.orders.orders;
export default orderSlice.reducer;

