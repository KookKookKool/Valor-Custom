/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-nesting'),  // Add this line
    require('tailwindcss'),
  ],
}

