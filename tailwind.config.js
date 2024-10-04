/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
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
    },
    backgroundImage: {
      'home-image': "url('./src/assets/images/headerbg.png')"
    },
  },
  plugins: [],
}

