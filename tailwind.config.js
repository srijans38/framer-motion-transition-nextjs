module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#121212',
        },
        ytred: {
          DEFAULT: '#FF0000',
        },
      },
      screens: {
        '8xl': '1400px',
      },
      minWidth: {
        '4xl': '68vw',
        '5xl': '64rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
