import React from "react";

import Kebab from "./svg/Kebab";
import CorrectFill from "./svg/CorrectFill";
import CorrectOutline from "./svg/CorrectOutline";
import { BsStopwatch } from "react-icons/bs";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const status_list = [
    {
        name: "CANCELLED",
        color: "bg-red-200",
        text_color: "text-red-500",
        progress: 'w-12/12',
    },
    {
        name: "ARRIVED",
        color: "bg-purple-100",
        text_color: "text-purple-500",
        progress: 'w-2/12',
    },
    {
        name: "BOOKING",
        color: "bg-pink-100",
        text_color: "text-pink-600",
        progress: 'w-1/12',
    },
    {
        name: "DROPPED_OFF",
        color: "bg-orange-100",
        text_color: "text-orange-500",
        progress: 'w-4/12',
    },
    {
        name: "WORKING",
        color: "bg-yellow-100",
        text_color: "text-yellow-500",
        progress: 'w-6/12',
    },
    {
        name: "PICKED_UP",
        color: "bg-blue-100",
        text_color: "text-blue-500",
        progress: 'w-10/12',
    },
    {
        name: "COMPLETED",
        color: "bg-green-100",
        text_color: "text-green-500",
        progress: 'w-12/12',
    },
];

const handleStatus = (status) => {
    const status_index = status_list.findIndex((item) => item.name === status);
    return status_list[status_index].text_color + " " + status_list[status_index].color + " ";
};

const handleProgress = (status) => {
    const status_index = status_list.findIndex((item) => item.name === status);
    return status_list[status_index].progress;
};

const fillZero = (num) => {
    return num < 10 ? "0" + num : num;
};


function Progress() {
    const [status, setStatus] = React.useState("ARRIVED");
    const [showSetting, setShowSetting] = React.useState(false);
    const [showBooking, setShowBooking] = React.useState(false);
    const [showArrived, setShowArrived] = React.useState(false);
    const [showCode, setShowCode] = React.useState(false);

    const order = [
        {
            comment: "Please call me when you arrive at the location to pick up the car",
            order_id: 1,
            type_car: "SEDAN",
            license_car: "กก 1234 สงขลา",
            color_car: "WHITE",
            nickname: "สมชาย",
            order_status: "BOOKING",
            tel: "0812345678",
            is_booking: true,
            booking_time: "2020-01-01 12:00:00",
            arrived_time: "2020-01-01 12:00:00",
            code: "1234",
            order_type: "GENERAL",
            services: [
                {
                    service_id: 1,
                    service_name: "Washing",
                    service_time: 30,
                    is_done: false,
                },
                {
                    service_id: 2,
                    service_name: "Cleaning",
                    service_time: 30,
                    is_done: true,
                },
            ],
        },
        {
            order_id: 1,
            type_car: "SEDAN",
            license_car: "กก 1234 สงขลา",
            color_car: "WHITE",
            nickname: "สมชาย",
            order_status: "BOOKING",
            tel: "0812345678",
            is_booking: true,
            booking_time: "12:00:00:000",
            arrival_time: "12:00:00:000",
            code: "1234",
            order_type: "GENERAL",
            services: [
                {
                    service_id: 1,
                    service_name: "Washing",
                    service_time: 30,
                    is_done: false,
                },
                {
                    service_id: 2,
                    service_name: "Cleaning",
                    service_time: 30,
                    is_done: true,
                },
            ],
        },
    ];



    const handleNextStatus = () => {
        const status_index = status_list.findIndex((item) => item.name === status);
        if (status_index < status_list.length - 1 && status_index > 0) {
            if (status_index == 1) {
                setStatus(status_list[status_index + 2].name);
            } else {
                setStatus(status_list[status_index + 1].name);
            }
        }
    };

    const handlePrevStatus = () => {
        const status_index = status_list.findIndex((item) => item.name === status);
        if (status_index > 3) {
            setStatus(status_list[status_index - 1].name);
        }
    };

    const handleReset = (oIdx) => {
        if (order[oIdx].is_booking) {
            setStatus("BOOKING");
        } else {
            setStatus("ARRIVED");
        }
    };

    const handleStatusCancel = (oIdx) => {
        setStatus("CANCELLED");
        setShowSetting(false);
    };

    const choiceSetting = [
        {
            name: "Cancel",
            func: handleStatusCancel,
        },
        {
            name: "Reset",
            func: handleReset,
        },
    ];

    const handleBlur = () => {
        setTimeout(() => {
            setShowSetting(false);
        }, 100);
    };




    return order.map((item, oIdx) => {
        return (
            <div class="mb-4" key={item.order_id}>
                <div class=" shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            {/* NOTE Popup Setting */}
                            <div className="relative">
                                <button onClick={() => setShowSetting(true)} onBlur={handleBlur} class="text-gray-200 mr-1" id="dropdownMenuIconButton" dataDropdownToggle="dropdownDots">
                                    <Kebab />
                                </button>
                                <div id="dropdownDots" class={(showSetting ? "" : "hidden") + " absolute  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"}>
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" ariaLabelledby="dropdownMenuIconButton">
                                        {
                                            choiceSetting.map((item, idx) => {
                                                return (
                                                    <li key={idx} >
                                                        <a onClick={e => item.func(oIdx)} class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            {/* NOTE Car detail */}
                            <span class="rounded-xl relative p-2 bg-blue-100">
                                <h1>{item.color_car}</h1>
                            </span>
                            <div class="flex flex-col">
                                <span class="font-bold text-md text-black dark:text-white ml-2">
                                    {item.license_car}
                                </span>
                                <span class="text-sm text-gray-500 dark:text-white ml-2">
                                    {item.type_car}
                                </span>
                            </div>
                        </div>

                        {/* NOTE User Info */}
                        <div class="flex items-center">
                            <span class=" flex items-center font-semibold text-xs ">
                                <span class="text-gray-500 mr-1 text-right">
                                    {item.nickname} <br />
                                    <span className="text-xxs">{item.tel}</span>
                                </span>

                                <img
                                    class="inline-block h-10 w-10 bg-red-300 rounded-full object-cover ring-2 ring-white"
                                    src="https://lh3.googleusercontent.com/a/ALm5wu0axHTXBreX09jP18jpvPSk6Oy4xfaSF9teUo3WLg=s96-c"
                                    alt="Guy"
                                />
                            </span>
                        </div>
                    </div>

                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />

                    {/* NOTE Task info */}
                    <ul>
                        {
                            item.services.map((service, sIdx) => {
                                return (
                                    <li key={sIdx} class={(service.is_done ? "text-gray-400 dark:border-gray-800" : "text-gray-600 dark:text-gray-200 ") + " flex items-center  justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800"}>
                                        <div class="flex items-center justify-start text-sm">
                                            <span class="mx-4">
                                                {fillZero(sIdx + 1)}
                                            </span>
                                            <span className={service.is_done ? "line-through" : ""}>
                                                {service.service_name}
                                            </span>

                                            <span class="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                                                {service.service_time}
                                                <BsStopwatch className="ml-1" />
                                            </span>
                                        </div>
                                        <div onClick={order[oIdx].services[sIdx].is_done = !service.is_done}>
                                            {!service.is_done ? (<CorrectFill />) : (<CorrectOutline />)}
                                        </div>
                                    </li>
                                )

                            })
                        }
                    </ul>

                    {/* NOTE Comment */}
                    <div>
                        <p className=" wrapper text-xxs text-gray-400 text-center">
                            {item?.comment ?? " "}
                            <span className="text-gray-500">
                                {" >> " + item.order_type + " Type <<"}
                            </span>
                        </p>
                    </div>

                    <div class="flex items-center justify-start my-4 space-x-4">
                        {
                            showBooking ?
                                (
                                    <span onClick={() => setShowBooking(false)} class="px-2 py-1 flex items-center cursor-pointer text-xs rounded-md font-semibold text-blue-500 bg-blue-50">
                                        {item.booking_time}
                                    </span>
                                ) :
                                (
                                    <span onClick={() => setShowBooking(true)} class="px-2 py-1 flex items-center cursor-pointer font-semibold text-xs rounded-md text-blue-400 border border-blue-400  bg-white">
                                        จองคิว
                                    </span>
                                )
                        }
                        {
                            showArrived ?
                                (
                                    <span onClick={() => setShowArrived(false)} class="px-2 py-1 flex items-center cursor-pointer text-xs rounded-md font-semibold text-pink-500 bg-pink-50">
                                        {item.arrived_time}
                                    </span>
                                ) :
                                (
                                    <span onClick={() => setShowArrived(true)} class="px-2 py-1 flex items-center cursor-pointer font-semibold text-xs rounded-md text-pink-400 border border-pink-400  bg-white">
                                        มาถึง
                                    </span>
                                )
                        }
                        {
                            item.code ?
                                showCode ?
                                    (
                                        <span onClick={() => setShowCode(false)} class="px-2 py-1 flex items-center cursor-pointer text-xs rounded-md font-semibold text-lime-500 bg-lime-50">
                                            {item.code}
                                        </span>
                                    ) :
                                    (
                                        <span onClick={() => setShowCode(true)} class="px-2 py-1 flex items-center cursor-pointer font-semibold text-xs rounded-md text-lime-400 border border-lime-400  bg-white">
                                            ส่วนลด
                                        </span>
                                    )
                                : null
                        }

                    </div>


                    {/* NOTE Progress Bar */}
                    <div class="block m-auto mb-3">
                        <div class="w-full h-2 bg-gray-200 rounded-full mt-2">
                            <div class={handleProgress(status) + " h-full text-center text-xs text-white bg-purple-500 rounded-full"}></div>
                        </div>
                    </div>

                    {/* NOTE Progress Step */}
                    <div class="flex items-left justify-left mb-2 space-x-2 overflow-hidden items-center justify-between">
                        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200 cursor-pointer hover:bg-gray-400 hover:text-white" onClick={handlePrevStatus}>
                            <IoIosArrowBack /> Prev
                        </span>
                        <span class={handleStatus(status) + "px-2 py-1 flex items-center font-semibold text-xs rounded-md "}>
                            {status}
                        </span>
                        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200 cursor-pointer hover:bg-gray-400 hover:text-white" onClick={handleNextStatus}>
                            Next <IoIosArrowForward />
                        </span>
                    </div>
                </div>
            </div>
        );
    });
}

export default Progress;
