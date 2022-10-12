import React from "react";

function NoPermission() {
  return (
    <div>
      <div className="block text-center ">
        <div className=" mx-auto max-w-lg h-auto pt-20 -my-10">
          <img src="https://cdn.dribbble.com/users/1299339/screenshots/7133657/media/837237d447d36581ebd59ec36d30daea.gif"></img>
        </div>
        <p className="text-7xl font-serif text-gray-900 dark:text-white">
          Sorry, you cannot view the page.
        </p>
        <p className="text-1xl font-serif text-gray-900 dark:text-white mt-5">
          No permission to access this page.
        </p>
        <p className="text-1xl font-serif text-gray-900 dark:text-white">
          To access, please contact the administrator.
        </p>

        <button
          type="button"
          class="mt-5 text-white bg-black hover:bg-red-800 focus:ring-4 font-serif rounded-full text-3xl px-16 py-2 text-center mr-2 mb-2"
        >
          Back to site
        </button>
      </div>
    </div>
  );
}

export default NoPermission;
