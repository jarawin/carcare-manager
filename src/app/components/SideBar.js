import React from "react";
import { FaUserEdit,FaUserFriends,FaUsers,FaBan,FaBandcamp } from "react-icons/fa";
import { MdOutlineMiscellaneousServices,MdDashboardCustomize } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { HiReceiptTax } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { selectOrder } from "../../slices/ordersSlice";

const page = [
    {
        name: "dashboard",
        path: "/",
        idx: 0
    },
    {
        name: "employees",
        path: "/employees",
        idx: 1
    }
]


function SideBar() {
    const dispatch = useDispatch();
    const orders = useSelector(selectOrder);


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
        </div>
    );
}

export default SideBar;
