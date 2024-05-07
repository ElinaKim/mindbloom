/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['kumbh', 'sans-serif'],
      'kumbh-bold': ['kumbh-bold', 'sans-serif'],
      'poppins': ['poppins', 'sans-serif'],
    },
    screens: {
      'md': '640px',
      'lg': '1280px',
    },
    colors : {
      'white': '#FFFFFF',
      'black': '#000000',
      'green': '#CDFC93',
      'darker-green': '#9FDC63',
      'pink': '#FF7ECD',
      'red': '#F51B00',
      'blue': ' #71D7FF',
      'purple': '#CE81FF',
      'yellow':  '#FFF68B',
      'grey': '#979797',
      'light-grey': '#D7D7D7',
    },
    extend: {
      backgroundImage: {
        'taskBackground': "url('../src/assets/images/wallBackground.jpeg')"
      }
    },
  },
  plugins: [],
}

