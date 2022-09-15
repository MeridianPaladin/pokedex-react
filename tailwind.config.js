/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/colorService.js"
  ],
  theme: {
    extend: {
      colors: {
        'bug':'#449754',
        'bug-light':'#66e37e',
        'dark': '#5a5979',
        'dark-light': '#9291c5',
        'dragon':'#61cad9',
        'dragon-light':'#71daff',
        'electric':'#e3e32b',
        'electric-light':'#fbfb72',
        'fairy':'#971944',
        'fairy-light':'#ea1369',
        'fighting':'#f0623a',
        'fighting-light':'#ff813d',
        'fire':'#ac2024',
        'fire-light':'#f82e34',
        'flying':'#4a677d',
        'flying-light':'#77a6c9',
        'ghost':'#32326a',
        'ghost-light':'#5656b6',
        'grass':'#147b3d',
        'grass-light':'#20c762',
        'ground':'#5c3d18',
        'ground-light':'#a9702c',
        'ice':'#86d2f5',
        'ice-light':'#d8f0fa',
        'normal':'#73525b',
        'normal-light':'#ca98a7',
        'poison':'#5f2c8a',
        'poison-light':'#9b69d9',
        'psychic':'#a5296c',
        'psychic-light':'#f13c9e',
        'rock':'#48180b',
        'rock-light':'#943116',
        'steel':'#5f756d',
        'steel-light':'#42bd94',
        'water':'#1552e2',
        'water-light':'#86a8fc',
  
      },
      fontFamily: {
        'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      aspectRatio: {
        "5/3": "5 / 3",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
