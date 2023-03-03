import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDataUser,
  resetAll,
  selectIsLogin,
  selectIsEmployee,
  setIsEmployee,
} from "../../slices/loginSlice";

function Application() {
  const dispatch = useDispatch();
  const dataUser = useSelector(selectDataUser);
  const isEmployee = useSelector(selectIsEmployee);
  const isLogin = useSelector(selectIsLogin);

  React.useEffect(() => {
    if (!isLogin) {
      window.location.href = "/";
    }
    if (isEmployee) {
      window.location.href = "/queue";
    }
  }, [isLogin, isEmployee]);

  return (
    <div>
      <div className="bg-gray-50 ">
        <div className="w-screen h-screen mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8  mt-1/2">
          <h2 className="  font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            <span className="block text-5xl">คุณไม่ได้เป็นพนักงานของเรา</span>
            <span className="block text-red-600 mt-2">
              สนใจสมัครเข้าทำงานกับเราหรือไม่?
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
                onClick={(e) => dispatch(setIsEmployee(true))}
              >
                สมัครงาน
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-indigo-50"
              >
                ข้อมูลเพิ่มเติม
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
