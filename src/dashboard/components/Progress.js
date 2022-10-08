import React from "react";

import Kebab from "./svg/Kebab";

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
        name: "PICKED_UP",
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
        name: "DROPPED_OFF",
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

function Progress() {
    const [status, setStatus] = React.useState("ARRIVED");

    const order = [
        {
            order_id: 1,
            type_car: "SEDAN",
            license_car: "กก 1234 สงขลา",
            color_car: "WHITE",
            nickname: "สมชาย",
            order_status: "BOOKING",
            tel: "0812345678",
            is_booking: true,
            booking_time: "2020-01-01 12:00:00",
            arrival_time: "2020-01-01 12:00:00",
            code: "1234",
            order_type: "GENERAL",
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


    return order.map((item) => {
        return (
            <div class="mb-4" key={item.order_id}>
                <div class=" shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center">
                            <button class="text-gray-200 mr-1">
                                <Kebab />
                            </button>

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
                        <div class="flex items-center">
                            <span class=" flex items-center font-semibold text-xs bg-white">
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

                    <hr />

                    <div class="flex items-center justify-start my-4 space-x-4">
                        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-blue-400 border border-blue-400  bg-white">
                            is_booking
                        </span>
                        <span class="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
                            booking_time
                        </span>
                    </div>

                    <div class="flex items-center justify-start my-4 space-x-4">
                        <span class="px-2 py-1 flex items-center text-xs rounded-md text-blue-500 font-semibold bg-blue-100">
                            arrival_time
                        </span>
                    </div>

                    <span class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
                        arrival_time
                    </span>

                    {/* NOTE Progress Bar */}
                    <div class="block m-auto mb-3">
                        <div class="w-full h-2 bg-gray-200 rounded-full mt-2">
                            <div class={handleProgress(status) + " h-full text-center text-xs text-white bg-purple-500 rounded-full"}></div>
                        </div>
                    </div>

                    <div class="flex items-left justify-left mb-4 space-x-2 overflow-hidden items-center justify-between">
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
