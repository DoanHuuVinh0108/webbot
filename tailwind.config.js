

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{html,js}',
     './pages/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgb(127 178 65)',
      },
    },
  },
  plugins: [],
}