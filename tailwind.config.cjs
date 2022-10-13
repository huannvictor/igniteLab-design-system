/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32
    },
    colors:{
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#e1e1e6',
        100: '#c4c4cc',
      },
      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
