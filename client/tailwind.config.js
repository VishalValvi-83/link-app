const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
      ".flowbite-react\\class-list.json"
    ],
    theme: {
      extend: {},
    },
    plugins: [require('flowbite/plugin'), flowbiteReact],
    darkMode: 'class', 
  };
  