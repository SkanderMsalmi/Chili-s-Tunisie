/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4AA70E",
        danger: "#DB2122",
        darkBackground: "#303030",
        
      },
      fontFamily: {
        'pt-sans': ['"PT Sans"', 'sans-serif'],
        'pt-sans-italic': ['"PT Sans Italic"', 'sans-serif'],
        'pt-sans-bold': ['"PT Sans Bold"', 'sans-serif'],
        'pt-sans-bold-italic': ['"PT Sans Bold Italic"', 'sans-serif'],

      },
      backgroundImage: {
        'contact-us': "url('./src/assets/bg-contactus.jpg')"
      }

    },
  },
  plugins: [],
}