import colors from 'tailwindcss/colors.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': 'url(\'./assets/images/bitmap\')'
      },
      spacing: {
        '100vh': '100vh'
      },
      height: {
        368: '368px'
      },
      colors: {
        white: '#fff',
        white1: '#fafafa',
        lightestGrey: '#E3E4F1',
        lightGrey: '#D1D2DA',
        grey: '#9495A5',
        blue: '#3A7CFD',
        dark: '#494C6B'
      },
      borderWidth: {
        1: '1px'
      },
      borderRadius: {
        5: '5px'
      },
      fontSize: {
        12: '12px',
        14: '14px'
      }
    }
  },
  plugins: []
}

