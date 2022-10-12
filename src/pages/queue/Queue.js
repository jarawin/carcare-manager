import React from "react";
import Progress from "./components/Progress";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsOpenSideBar,
  openSideBar,
  closeSideBar,
} from "../../slices/layoutSlice";

function App() {
  const dispatch = useDispatch();
  const isOpenSideBar = useSelector(selectIsOpenSideBar);
  return (
    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div
          className={
            (isOpenSideBar
              ? "grid-cols-1 md:gap-4 lg:grid-cols-2"
              : "grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3") +
            " w-full grid  auto-cols-auto"
          }
        >
          <Progress />
        </div>
      </div>
    </div>
  );
}

export default App;
