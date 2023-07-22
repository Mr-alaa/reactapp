// postcss.config.js
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    require('autoprefixer')
  ],
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.tsx'],
};
