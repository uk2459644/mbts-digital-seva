const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [ './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './layout/**/*.{js,ts,jsx,tsx}',
  './helpers/**/*.{js,ts,jsx,tsx}',],
  darkMode:  'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Oswald", ...defaultTheme.fontFamily.sans],
        
      },
      animation: {
        'ping-slow': 'pong 7s ease-in-out infinite',
       },
       keyframes:{
         pong:{
           '100%':{
             opacity:'0',
           },
           '0%, 20%, 50%, 80%':{
             opacity:'1'
           }
         }
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
