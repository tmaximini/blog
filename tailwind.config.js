// const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')]
};
