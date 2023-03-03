import React from "react";

import { useDispatch } from "react-redux";
import { closeSideBar } from "../../slices/layoutSlice";
import { addOrder } from "../../slices/ordersSlice";

import DarkMode from "./DarkMode";

import mockOrders from "../../assets/data/mock/mockOrders";

import { IoIosArrowBack } from "react-icons/io";
import pages from "../../assets/data/pages";
import logo from "../../assets/logos/3.svg";

function SideBar() {
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(window.location.pathname || "/");

  return (
    <div className=" h-screen block my-4 ml-4 shadow-lg relative">
      <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
        <div className="flex relative ">
          <div className="flex items-center justify-center p-2 w-full ">
            <img
              className="w-20 cursor-pointer "
              src={logo}
              onClick={(e) => dispatch(addOrder(mockOrders))}
            />
          </div>

          <IoIosArrowBack
            size={25}
            className="hover:text-red-600  flex items-center justify-center mt-6 text-gray-500 cursor-pointer absolute top-0 right-3"
            onClick={() => dispatch(closeSideBar())}
          />
        </div>

        <nav className="mt-6">
          <div>
            {pages.map((page, index) => {
              if (index < 8) {
                return (
                  <a
                    key={index}
                    href={page.path}
                    className={
                      "w-full font-thin uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-start " +
                      (active === page.path
                        ? "text-red-500  bg-gradient-to-r from-white to-blue-100 border-r-4 border-red-500 dark:from-gray-700 dark:to-gray-800 "
                        : "text-gray-500  hover:text-red-500 ")
                    }
                  >
                    <span className="text-left">{page.icon}</span>
                    <span className="mx-4 text-sm font-normal">
                      {page.name}
                    </span>
                  </a>
                );
              }
            })}
          </div>
        </nav>

        <DarkMode />
      </div>
    </div>
  );
}

export default SideBar;
