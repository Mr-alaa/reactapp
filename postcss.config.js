// postcss.config.js
const tailwindcss = require('tailwindcss');
const path = require('path');

module.exports = {
  plugins: [
    tailwindcss,
    require('autoprefixer')
  ],
  content: [
    path.join(__dirname, 'src/**/*.html'),
    path.join(__dirname, 'src/**/*.js'),
    path.join(__dirname, 'src/**/*.jsx')
  ],
};
