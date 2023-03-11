import { createSlice } from "@reduxjs/toolkit";

import tempPromotions from "../assets/data/temp/tempPromotions";

const initialState = {
  prom: JSON.parse(localStorage.getItem("prom") || "[]"),
};

export const promSlice = createSlice({
  name: "promotions",
  initialState,

  reducers: {
    setProm: (state, action) => {
      var ptemp = [];
      action.payload?.forEach((p) => {
        ptemp.push({ ...p, isEdit: false });
      });
      state.prom = ptemp;
      localStorage.setItem("prom", JSON.stringify(action.payload));
    },
    addProm: (state, action) => {
      state.prom.push(tempPromotions);
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    delProm: (state, action) => {
      state.prom = state.prom.filter((p) => p.code !== action.payload);
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setName: (state, action) => {
      const idx = action.payload.idx;
      const name = action.payload.name;
      state.prom[idx].name = name;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setCode: (state, action) => {
      const idx = action.payload.idx;
      const code = action.payload.code;
      state.prom[idx].code = code;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setDescriptions: (state, action) => {
      const idx = action.payload.idx;
      const descriptions = action.payload.descriptions;
      state.prom[idx].descriptions = descriptions;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setStartDate: (state, action) => {
      const idx = action.payload.idx;
      const startDate = action.payload.startDate;
      state.prom[idx].startDate = startDate;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setEndDate: (state, action) => {
      const idx = action.payload.idx;
      const endDate = action.payload.endDate;
      state.prom[idx].endDate = endDate;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setReduce: (state, action) => {
      const idx = action.payload.idx;
      const reduce = action.payload.reduce;
      const i = action.payload.index;
      state.prom[idx].price_per_typeP[i].reduce = reduce;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setReduceType: (state, action) => {
      const idx = action.payload.idx;
      const reduce_type = action.payload.reduce_type;
      const i = action.payload.index;
      state.prom[idx].price_per_typeP[i].reduce_type = reduce_type;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setLimitAmount: (state, action) => {
      const idx = action.payload.idx;
      const limit_amount = action.payload.limit_amount;
      state.prom[idx].limit_amount = limit_amount;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setLimitType: (state, action) => {
      const idx = action.payload.idx;
      const limit_type = action.payload.limit_type;
      state.prom[idx].limit_type = limit_type;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setCanReduce: (state, action) => {
      const idx = action.payload.idx;
      const can_reduce = action.payload.can_reduce;
      console.log(can_reduce);
      // for (let i = 0; i < can_reduce.length; i++) {
      //   state.prom[idx].can_reduce[i].name = can_reduce[i].name;
      // }
      state.prom[idx].can_reduce = can_reduce;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
    setDays: (state, action) => {
      const idx = action.payload.idx;
      const days = action.payload.days;
      console.log(days);
      // for (let i = 0; i < days.length; i++) {
      //   state.prom[idx].days[i].day = days[i].value;
      // }
      state.prom[idx].days = days;
      localStorage.setItem("prom", JSON.stringify(state.prom));
    },
  },
});

export const {
  setProm,
  addProm,
  setName,
  setCode,
  setDescriptions,
  setStartDate,
  setEndDate,
  setReduce,
  setReduceType,
  setLimitAmount,
  setLimitType,
  setCanReduce,
  setDays,
  delProm,
} = promSlice.actions;

export const selectProm = (state) => state.prom.prom;

export default promSlice.reducer;
