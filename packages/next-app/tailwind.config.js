//const colors = require('tailwindcss/colors')

//import  'tailwindcss/colors'

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '48/100': '48%'
      },
      colors: {
        gold: {
          light: '#fcf300',
          DEFAULT: '#ffc600',
          dark: '#ffc600'
        },
        blue: {
          light: '#a2d6f9',
          DEFAULT: '#1e96fc',
          dark: '#072ac8'
        },
        brown: {
          light: '#faf3dd',
          DEFAULT: '#8f8355',
          dark: '#352f1c'
        },
        green: {
          light: '#90f9ac',
          DEFAULT: '#3f9459',
          dark: '#13361e'
        },
        white: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#f0f0f0'
        },
      }
    },
  },
  variants: {
    extend: {
      /*
      colors: {
        gold: '#f1b476,
        cyan: colors.cyan,
      },
      */
    },
  },
  plugins: [],
}



