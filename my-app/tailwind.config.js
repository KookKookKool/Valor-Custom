/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-nesting'),  // Add this line
    require('tailwindcss'),
  ],
}

