/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish"],
      },
      colors: {
        lavenderblush: "#FFF1F2",
      },
    },
  },
  plugins: [],
};
