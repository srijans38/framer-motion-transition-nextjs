module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#121212',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
