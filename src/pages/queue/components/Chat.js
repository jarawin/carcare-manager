import React from 'react'

function Chat() {
    return (
        <div class="mb-4">
            <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                <p class="font-bold text-md text-black dark:text-white">
                    Messages
                </p>
                <ul>
                    <li class="flex items-center my-6 space-x-2">
                        <a href="#" class="block relative">
                            <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                Charlie Rabiller
                            </span>
                            <span class="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                Hey John ! Do you read the NextJS doc ?
                            </span>
                        </div>
                    </li>
                    <li class="flex items-center my-6 space-x-2">
                        <a href="#" class="block relative">
                            <img alt="profil" src="/images/person/5.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                Marie Lou
                            </span>
                            <span class="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                No I think the dog is better...
                            </span>
                        </div>
                    </li>
                    <li class="flex items-center my-6 space-x-2">
                        <a href="#" class="block relative">
                            <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                Ivan Buck
                            </span>
                            <span class="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                Seriously ? haha Bob is not a child !
                            </span>
                        </div>
                    </li>
                    <li class="flex items-center my-6 space-x-2">
                        <a href="#" class="block relative">
                            <img alt="profil" src="/images/person/7.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                Marina Farga
                            </span>
                            <span class="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                Do you need that design ?
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Chat