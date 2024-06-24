const { delay } = require('framer-motion')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation:{
        'slide-rev': 'slide 16s linear infinite',
        'slide-rev2': 'slide-rev 16s linear infinite'
      },

      keyframes:{
        'slide' :{
          '49%': {
            'transform': 'translateX(1200px)',
            'opacity': '0'
          },
          '51%': {
            'transform': 'translateX(-1200px)',
            'opacity': '0.1'
          },
          '100%': {
            'transform': 'translateX(0px)'
          },
        },
        'slide-rev' :{
          '49%': {
            'transform': 'translateX(-1200px)',
            'opacity': '0'
          },

          '51%': {
            'transform': 'translateX(1200px)',
            'opacity': '0.1'
          },
          
          '100%': {
            'transform': 'translateX(0px)'
          },
        },
      }
      
    },
  },
  
  plugins: [],
};

