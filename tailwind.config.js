/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      londrina: ['Londrina', 'sans-serif'],
      finger: ['FingerPaint', 'sans-serif']
    },
    extend: {
      colors: {
        'font-white': '#fafafa',                         
        primary: '#282C34',
        secondary: '#61dafb'
      },
      keyframes: {
        showmenu: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      animation: {
        showmenu: 'showmenu 2s linear'
      }
    },
    backgroundImage: {
      'home-image': "url('../src/assets/images/headerbg.png')"
    },
  },
  plugins: [],
}

