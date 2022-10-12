import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsOpenSideBar,
  openSideBar,
  closeSideBar,
} from "../slices/layoutSlice";

import SideBar from "./components/SideBar";
import Header from "./components/Header";

function Layout() {
  const dispatch = useDispatch();
  const isOpenSideBar = useSelector(selectIsOpenSideBar);

  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <div
            className={
              (isOpenSideBar ? "w-full mr-5" : "hidden") +
              " md:w-100 md:mr-0 lg:w-128"
            }
          >
            <SideBar />
          </div>

          <div
            className={
              (isOpenSideBar ? "hidden md:flex" : "") +
              " w-full  flex-col  pl-0 md:p-4 md:space-y-4"
            }
          >
            <Header />
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default Layout;
