/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        100: "25rem",
      },
    },
    fontSize: {
      xxs: "0.8rem",
      xs3: "0.6rem",
    },
  },
  plugins: [require("flowbite/plugin")],
};
