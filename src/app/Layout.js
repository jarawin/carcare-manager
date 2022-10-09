import React from 'react'
import { Outlet } from 'react-router-dom';

import SideBar from './components/SideBar'
import Header from './components/Header';

function Layout() {
    return (
        <>
            {/* <div>Layout</div> */}
            <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                <div className="flex items-start justify-between">

                    <SideBar />
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <Header />
                        <Outlet />
                    </div>

                </div>
            </main >
        </>
    )
}

export default Layout