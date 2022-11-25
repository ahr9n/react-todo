/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000",
      green: "#4eb879",
      "dark-green": "#004C00",
      white: "#FFF",
      red: "#F00",
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-300": "#D1D5DB",
      "gray-400": "#9CA3AF",
      "gray-600": "#4B5563",
    },
    extend: {
      fontFamily: {
        permanentMaker: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};
