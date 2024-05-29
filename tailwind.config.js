/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fmBlack: '#272324',
        fmGrey: '#a3a4a8',
        fmBlue: '#2463af',
        fmLightBlue: '#92b2d8',
        fmWhite: '#f0f0f0',
      }
    },
  },
  plugins: [],
}