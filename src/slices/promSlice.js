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
  delProm,
} = promSlice.actions;

export const selectProm = (state) => state.prom.prom;

export default promSlice.reducer;
