/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        pressStart: ["Press Start 2P", "cursive"],
        rubikMaps: ["Rubik Maps", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
