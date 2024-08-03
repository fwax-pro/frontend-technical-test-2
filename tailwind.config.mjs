/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '88': '22rem'
      },
      height: {
        '26': '6.5rem'
      },
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#141414',
        'accent': '#AF0C1E',
        'surface': '#E5E5E5',
        'onSurface': '#525252'
      },
      fontSize: {
        'xl': '20px'
      },
      lineHeight: {
        '7': '28px'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: []
}
