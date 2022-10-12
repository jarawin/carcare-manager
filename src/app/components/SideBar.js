import React from "react";
<<<<<<< HEAD
=======
import { FaUserEdit,FaUserFriends,FaUsers,FaBan,FaBandcamp } from "react-icons/fa";
import { MdOutlineMiscellaneousServices,MdDashboardCustomize } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { HiReceiptTax } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder } from "../../slices/ordersSlice";
>>>>>>> refs/remotes/origin/main

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

<<<<<<< HEAD
          <IoIosArrowBack
            size={25}
            className="hover:text-red-600 w-2/12 flex items-center justify-center mt-6 text-gray-500 cursor-pointer"
            onClick={() => dispatch(closeSideBar())}
          />
=======
    return (
        <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-96">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                <div className="flex items-center justify-center pt-6" onClick={() => alert(JSON.stringify(orders))}>
                    <svg
                        width="35"
                        height="30"
                        viewBox="0 0 256 366"
                        version="1.1"
                        preserveAspectRatio="xMidYMid"
                    >
                        <defs>
                            <linearGradient
                                x1="12.5189534%"
                                y1="85.2128611%"
                                x2="88.2282959%"
                                y2="10.0225497%"
                                id="linearGradient-1"
                            >
                                <stop
                                    stopColor="#FF0057"
                                    stopOpacity="0.16"
                                    offset="0%"
                                ></stop>
                                <stop stopColor="#FF0057" offset="86.1354%"></stop>
                            </linearGradient>
                        </defs>
                        <g>
                            <path
                                d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                                fill="#001B38"
                            ></path>
                            <circle
                                fill="url(#linearGradient-1)"
                                transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                                cx="147.013244"
                                cy="147.014675"
                                r="78.9933938"
                            ></circle>
                            <circle
                                fill="url(#linearGradient-1)"
                                opacity="0.5"
                                transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                                cx="147.013244"
                                cy="147.014675"
                                r="78.9933938"
                            ></circle>
                        </g>
                    </svg>
                </div>
                <nav className="mt-6">
                    <div>
                        <a
                            className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <FaBandcamp className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">Dashboard</span>
                        </a>
                        <a
                            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <FaUserFriends className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">Manage Customer</span>
                        </a>
                        <a
                            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <FaUserEdit className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">Manage Employee</span>
                        </a>
                        <a
                            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <FaUsers className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">Manage Queue</span>
                        </a>
                        <a
                            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <MdDashboardCustomize className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">Manage Services</span>
                        </a>
                        <a
                            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <GiPriceTag className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">Manage Promotion</span>
                        </a>
                        <a
                            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <HiReceiptTax className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">Manage Commissions</span>
                        </a>
                        <a
                            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <FaBan className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">No Permission</span>
                        </a>
                        <a
                            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                            href="#"
                        >
                            <span className="text-left">
                                <MdOutlineMiscellaneousServices className="w-5 h-5"/>
                            </span>
                            <span className="mx-4 text-sm font-normal">Settings</span>
                        </a>
                    </div>
                </nav>
            </div>
>>>>>>> refs/remotes/origin/main
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
