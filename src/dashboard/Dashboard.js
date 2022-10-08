import React from 'react'
import Progress from './components/Progress'

function App() {
    return (
        <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap sm:flex-row ">
                <div class="w-full sm:w-1/2 xl:w-1/3">
                    <Progress />
                </div>
                <div class="w-full sm:w-1/2 xl:w-1/3 mb-5">

                    <Progress />
                </div>
                <div class="w-full sm:w-1/2 xl:w-1/3 mb-5">

                    <Progress />
                </div>
            </div>
        </div>
    )
}

export default App