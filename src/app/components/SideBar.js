import React from "react";

import { useDispatch } from "react-redux";
import { closeSideBar } from "../../slices/layoutSlice";
import { addOrder } from "../../slices/ordersSlice";

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
        <div className="flex">
          <div className="flex items-center justify-center pt-6 w-10/12">
            <img
              className="w-20 cursor-pointer"
              src={logo}
              onClick={(e) => dispatch(addOrder(mockOrders))}
            />
          </div>

          <IoIosArrowBack
            size={25}
            className="hover:text-red-600 w-2/12 flex items-center justify-center mt-6 text-gray-500 cursor-pointer"
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
                    <span className="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      {page.name}
                    </span>
                  </a>
                );
              }
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
