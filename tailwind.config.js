/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'noto': ['noto', 'sans-serif'],
      'sans': ['kumbh', 'sans-serif'],
      'poppins': ['poppins', 'sans-serif'],
    },
    screens: {
      'md': '640px',
      'lg': '1280px',
    },
    colors : {
      'green': '#CDFC93',
      'darker-green': '#9FDC63',
      'pink': '#FF7ECD',
      'blue': ' #71D7FF',
      'purple': '#CE81FF',
      'yellow':  '#FFF68B',
      'grey': '#979797',
    },
    extend: {
    },
  },
  plugins: [],
}

