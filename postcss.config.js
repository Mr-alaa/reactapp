/*
const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
}
*/
const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss,
    require('autoprefixer')
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
};
