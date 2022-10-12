import React from "react";

function NoPage() {
  React.useEffect(() => {
    document.getElementById("vid").play();
  }, []);

  return (
    <div className="flex">
      <div className=" w-3/6 mt-20 ">
        <video
          id="vid"
          className=" object-cover"
          src="https://cdn.dribbble.com/users/1170793/videos/11136/teamwork_9.mp4"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video>
      </div>

      <div className="block text-center mt-40">
        <p className="text-9xl font-serif text-gray-900 dark:text-white">404</p>
        <p className="text-4xl font-serif text-gray-900 dark:text-white mt-5">
          UH OH! You're lost.
        </p>
        <p className="text-1xl font-serif text-gray-900 dark:text-white mt-5">
          The page you are looking for does not exits. How you got here is a
          mystery.
        </p>
        <p className="text-1xl font-serif text-gray-900 dark:text-white">
          But you can click the button below to go back to the homepage.
        </p>

        <button
          type="button"
          class="mt-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-green-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-serif rounded-full text-3xl px-16 py-2 text-center mr-2 mb-2"
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default NoPage;
