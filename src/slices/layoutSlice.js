import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSideBar: JSON.parse(localStorage.getItem("isOpenSideBar") ?? "true"),
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,

  reducers: {
    openSideBar: (state) => {
      state.isOpenSideBar = true;
      localStorage.setItem("isOpenSideBar", true);
    },
    closeSideBar: (state) => {
      state.isOpenSideBar = false;
      localStorage.setItem("isOpenSideBar", false);
    },
  },
});

export const { openSideBar, closeSideBar } = layoutSlice.actions;
export const selectIsOpenSideBar = (state) => state.layout.isOpenSideBar;

export default layoutSlice.reducer;
