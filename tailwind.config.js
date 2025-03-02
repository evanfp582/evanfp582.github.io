/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vermilion: 'rgb(224, 74, 61)',        // Vermilion
        richBlack: 'rgb(13, 19, 33)',         // Rich Black
        battleshipGray: 'rgb(128, 135, 130)', // Battleship Gray
        babyPowder: 'rgb(249, 247, 243)',     // Baby Powder
      },
    },
  },
  plugins: [],
}